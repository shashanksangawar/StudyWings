// <---- Required Libraries ---->
const mysql = require('mysql2');
const crypto = require('crypto');

// Create a connection pool to manage database connections
const pool = mysql.createPool(
{
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'ROOT',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Create a new root account
const account_create = (username, password ,email)=>
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

            // Hash the password using SHA-256
            const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
            
            // Check if the user already exists
            connection.query('SELECT * FROM root WHERE UserName=?', [username], (query_error, results) => 
            {
                if (query_error) 
                {
                    connection.release();
                    reject({ 'returncode': 1, 'message': query_error, 'output': [] });
                    return;
                }

                if (results.length > 0) 
                {
                    connection.release();
                    reject({ 'returncode': 1, 'message': 'Account Exists Please Sign In', 'output': [] });
                    return;
                }

                // If the user doesn't exist, create a new account
                const query = 'INSERT INTO root (UserName, PasswordHash, Email) VALUES (?, ?, ?)';
                connection.query(query, [username, hashedPassword, email], (queryError, results) => 
                {
                    connection.release();
                    if(queryError)
                    {
                        reject({'returncode': 1, 'message': queryError, 'output': []});
                        return;
                    }

                    resolve({'returncode': 0, 'message': 'User Creation successful', 'output': results[0]});
                });
            });
        });
    });
}


// Authenticate existing root account
const account_login = (username, password) => 
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

            const hashedEnteredPassword = crypto.createHash('sha256').update(password).digest('hex'); 
            const query = 'SELECT * FROM root WHERE UserName = ? AND PasswordHash = ?';
            connection.query(query, [username, hashedEnteredPassword], (queryError, results) => 
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


module.exports = { account_create, account_login };
