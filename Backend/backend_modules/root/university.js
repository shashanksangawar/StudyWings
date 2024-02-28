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

const add = ( name, location, description, ranking, admission_process)=>
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
            const query = 'INSERT INTO universities (University_Name, University_Location, Description, University_Ranking, University_AdmissionProcess) VALUES (?, ?, ?, ?, ?)';
            connection.query(query, [name, location, description, ranking, admission_process], (queryError, results) => 
            {
                connection.release();
                if(queryError)
                {
                    reject({'returncode': 1, 'message': queryError, 'output': []});
                    return;
                }

                resolve({'returncode': 0, 'message': 'University added successfully', 'output': results[0]});
            });
        });
    });
}


const update = (name, location, description, ranking, admission_process, university_id)=>
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


            // Updating a University
            const query = 'UPDATE universities SET University_Name=?, University_Location=?, Description=?, University_Ranking=?, University_AdmissionProcess=? WHERE University_Id=?';
            connection.query(query, [name, location, description, ranking, admission_process, university_id], (queryError, results) => 
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

module.exports = { add, update };