// <---- Required Libraries ---->
const mysql = require('mysql2');

const pool = mysql.createPool(
{
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'APPLICATIONS',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Authenticate existing University account
const account_login = (university_name) => 
{
    return new Promise((resolve, reject) => 
    {
        pool.getConnection((connection_error, connection) => 
        {
            if (connection_error) 
            {
                reject({'returncode': 1, 'message': 'Error connecting to MariaDB', 'output': []});
                return;
            }

            const query = 'SELECT * FROM UNIVERSITIES.universities WHERE University_Name = ?';
            connection.query(query, [university_name], (queryError, results) => 
            {
                connection.release();
        
                if (queryError) 
                {
                    reject({'returncode': 1, 'message': queryError, 'output': []});
                    return;
                }
        
                if (results.length > 0) 
                {
                    // User authenticated successfully
                    resolve({'returncode': 0, 'message': 'Authentication successful', 'output': results[0]});
                } 
                
                else 
                {
                    // User not found or incorrect credentials
                    reject({'returncode': 1, 'message': 'Authentication failed', 'output': []});
                }
            });
        });
    });
};

// Update a application
const update = (app_status, app_id)=>
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
            const query = 'UPDATE applications SET Application_Status=? WHERE Application_Id=?';
            connection.query(query, [app_status, app_id], (queryError, results) => 
            {
                connection.release();
                if(queryError)
                {
                    reject({'returncode': 1, 'message': queryError, 'output': []});
                    return;
                }

                resolve({'returncode': 0, 'message': 'Application updated successfully', 'output': []});
            });
        });
    });
}

// Read Students application
const read = (university_id) =>
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

            const query = 'SELECT * FROM applications a, UNIVERSITIES.university_courses u, STUDENTS.students s, STUDENTS.student_registration sr, STUDENTS.student_documents sd WHERE a.CourseID=u.Course_Id AND a.StudentID=s.Student_Id AND sr.StudentID=s.Student_Id AND sd.StudentID=s.Student_Id AND u.UniversityID=?;';
            connection.query(query, [university_id], (queryError, results) => {
            connection.release();
    
            if (queryError) {
                reject({'returncode': 1, 'message': queryError, 'output': []});
                return;
            }
    
            if (results.length > 0) 
            {
                // Destinations Fetched
                resolve({'returncode': 0, 'message': 'Fetched Applications', 'output': results});
            } 
            else 
            {
                // No Destinations are available
                reject({'returncode': 1, 'message': 'No Applications found', 'output': []});
            }
            });
        });
    });
};

module.exports = { update, read, account_login };