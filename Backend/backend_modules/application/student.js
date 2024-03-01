// <---- Required Libraries ---->
const mysql = require('mysql2');

// Create a connection pool to manage database connections
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

// Create a new application
const add = (course_id, student_id, app_status)=>
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
            const query = 'INSERT INTO applications (CourseID, StudentID, Application_Status) VALUES (?, ?, ?)';
            connection.query(query, [course_id, student_id, app_status], (queryError, results) => 
            {
                connection.release();
                if(queryError)
                {
                    reject({'returncode': 1, 'message': queryError, 'output': []});
                    return;
                }

                resolve({'returncode': 0, 'message': 'Application added successfully', 'output': []});
            });
        });
    });
}

// Read a student Application
const read = (student_id) =>
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
            const query = 'SELECT * FROM applications a, UNIVERSITIES.university_courses uc, STUDENTS.students s, UNIVERSITIES.universities u WHERE a.CourseID=uc.Course_Id AND a.StudentID= ? AND a.StudentID=s.Student_Id AND uc.UniversityID=u.University_Id;';
            connection.query(query, [student_id],(queryError, results) => {
            connection.release();
    
            if (queryError) {
                reject({'returncode': 1, 'message': queryError, 'output': []});
                return;
            }
    
            if (results.length > 0) 
            {
                // Destinations Fetched
                resolve({'returncode': 0, 'message': 'Fetched', 'output': results});
            } 
            else 
            {
                // No Destinations are available
                reject({'returncode': 1, 'message': 'No Data found', 'output': []});
            }
            });
        });
    });
};


module.exports = { add, read };