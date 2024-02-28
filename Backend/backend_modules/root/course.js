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

const add = (university_id, country_id, name, description, duration, fees, start_date, end_date, status)=>
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
            const query = 'INSERT INTO university_courses (UniversityID, CountryID, Course_Name, Course_Description, Course_Duration, Course_Fees, Course_StartDate, Course_EndDate, Course_Status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            connection.query(query, [university_id, country_id, name, description, duration, fees, start_date, end_date, status], (queryError, results) => 
            {
                connection.release();
                if(queryError)
                {
                    reject({'returncode': 1, 'message': queryError, 'output': []});
                    return;
                }

                resolve({'returncode': 0, 'message': 'Course added successfully', 'output': results[0]});
            });
        });
    });
}

const update = (university_id, country_id, name, description, duration, fees, start_date, end_date, status, course_id)=>
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
            const query = 'UPDATE university_courses SET UniversityID=?, CountryID=?, Course_Name=?, Course_Description=?, Course_Duration=?, Course_Fees=?, Course_StartDate=?, Course_EndDate=?, Course_Status=? WHERE Course_Id=?';
            connection.query(query, [university_id, country_id, name, description, duration, fees, start_date, end_date, status, course_id], (queryError, results) => 
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