// <---- Required Libraries ---->
const mysql = require('mysql2');

// Create a connection pool to manage database connections
const pool = mysql.createPool(
{
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'UNIVERSITIES',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const add = (country, description)=>
{
    return new Promise((resolve, reject)=>
    {
        // Get a connection from the pool
        pool.getConnection((connection_error, connection)=>
        {
            if(connection_error)
            {
                reject({'returncode': 1, 'message': connection_error, 'output': []});
                return;
            }


            // Adding a new Country
            const query = 'INSERT INTO countries (Country, Description) VALUES (?, ?)';
            connection.query(query, [country, description], (queryError, results) => 
            {
                connection.release();
                if(queryError)
                {
                    reject({'returncode': 1, 'message': queryError, 'output': []});
                    return;
                }

                resolve({'returncode': 0, 'message': 'Country added successfully', 'output': results[0]});
            });
        });
    });
}

const update = (country, description, country_id)=>
{
    return new Promise((resolve, reject)=>
    {
        // Get a connection from the pool
        pool.getConnection((connection_error, connection)=>
        {
            if(connection_error)
            {
                reject({'returncode': 1, 'message': connection_error, 'output': []});
                return;
            }


            // Updating a Country
            const query = 'UPDATE countries SET Country=?, Description=? WHERE CountryId=?';
            connection.query(query, [country, description, country_id], (queryError, results) => 
            {
                connection.release();
                if(queryError)
                {
                    reject({'returncode': 1, 'message': queryError, 'output': []});
                    return;
                }

                resolve({'returncode': 0, 'message': 'Country updated successfully', 'output': results[0]});
            });
        });
    });
}

const read = () =>
{
    return new Promise((resolve, reject) => 
    {
        pool.getConnection((err, connection) => 
        {
            if (err) 
            {
              reject({'returncode': 1, 'message': err, 'output': []});
              return;
            }
            const query = 'SELECT * FROM countries;';
            connection.query(query, (queryError, results) => {
            connection.release();
    
            if (queryError) {
                reject({'returncode': 1, 'message': queryError, 'output': []});
                return;
            }
    
            if (results.length > 0) 
            {
                // Countries Fetched
                resolve({'returncode': 0, 'message': 'Fetched Countries', 'output': results});
            } 
            else 
            {
                // No Countries are available
                reject({'returncode': 1, 'message': 'No Countries found', 'output': []});
            }
            });
        });
    });
};

module.exports = { add, update, read };