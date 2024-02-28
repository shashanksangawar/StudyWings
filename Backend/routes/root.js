// <---- Required Libraries ---->
const express = require('express');
const router = express.Router();
router.use(express.json());

// <---- Backend Modules ---->
const account = require('../backend_modules/root/account');
const Country = require('../backend_modules/root/country');
const University = require('../backend_modules/root/university');
const Course = require('../backend_modules/root/course');

// ------------------------------
// <------- User Account ------->
// ------------------------------


// Login
router.post("/login", async function(request, response) 
{
    const { username, password } = request.body;

    try 
    {
        const loginResult = await account.account_login(username, password);

        if (loginResult.returncode === 0) 
        {
            response.status(200).send({'returncode': 0, 'message': 'Authentication Verified', 'output': []});
        }
        else 
        {
            response.status(401).send({'returncode': 1, 'message': 'Account not Found', 'output': []});
        }
    }

    catch (error)
    {
        response.status(500).send({'returncode': 1, 'message': 'Temporary Server Down, Please try again after some time', 'output': []});
    }
});


// Register
router.post("/register", async function(request, response)
{
    const { username, password ,email } = request.body
    try 
    {
        const registrationResult = await account.account_create(username, password ,email);
        
        // Check the return code to determine success or failure
        if (registrationResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': 'User Created Successfully', 'output': []});
        }
        else 
        {
            response.status(400).send({'returncode': 1, 'message': registrationResult.message, 'output': registrationResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(400).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});

// <====== Country ======>

// Fetch
router.get("/fetch/country", async function(request, response)
{
    try 
    {
        const fetchResult = await Course.read();
        
        // Check the return code to determine success or failure
        if (fetchResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': fetchResult.message, 'output': fetchResult.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': fetchResult.message, 'output': fetchResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(503).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});

// Add 
router.post("/add/country", async function(request, response)
{
    const { country, description } = request.body
    try 
    {
        const insertionResult = await Country.add(country, description);
        
        // Check the return code to determine success or failure
        if (insertionResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': 'Country Added Successfully', 'output': []});
        }
        else 
        {
            response.status(400).send({'returncode': 1, 'message': insertionResult.message, 'output': insertionResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(400).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});

// Update 
router.post("/update/country", async function(request, response)
{
    const { country, description, country_id } = request.body
    try 
    {
        const updateResult = await Country.update(country, description, country_id);
        
        // Check the return code to determine success or failure
        if (updateResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': updateResult.message, 'output': []});
        }
        else 
        {
            response.status(400).send({'returncode': 1, 'message': updateResult.message, 'output': updateResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(400).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});


// <====== University ======>

// Fetch
router.get("/fetch/university", async function(request, response)
{
    try 
    {
        const fetchResult = await Course.read();
        
        // Check the return code to determine success or failure
        if (fetchResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': fetchResult.message, 'output': fetchResult.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': fetchResult.message, 'output': fetchResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(503).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});

// Add 
router.post("/add/university", async function(request, response)
{
    const { name, location, description, ranking, admission_process } = request.body
    try 
    {
        const insertionResult = await University.add(name, location, description, ranking, admission_process);
        
        // Check the return code to determine success or failure
        if (insertionResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': 'University Added Successfully', 'output': []});
        }
        else 
        {
            response.status(400).send({'returncode': 1, 'message': insertionResult.message, 'output': insertionResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(400).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});

// Update 
router.post("/update/university", async function(request, response)
{
    const { name, location, description, ranking, admission_process, university_id } = request.body
    try 
    {
        const updateResult = await University.update(name, location, description, ranking, admission_process, university_id);
        
        // Check the return code to determine success or failure
        if (updateResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': updateResult.message, 'output': []});
        }
        else 
        {
            response.status(400).send({'returncode': 1, 'message': updateResult.message, 'output': updateResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(400).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});



// <====== Course ======>

// Fetch
router.get("/fetch/course", async function(request, response)
{
    try 
    {
        const fetchResult = await Course.read();
        
        // Check the return code to determine success or failure
        if (fetchResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': fetchResult.message, 'output': fetchResult.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': fetchResult.message, 'output': fetchResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(503).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});

// Add 
router.post("/add/course", async function(request, response)
{
    const { university_id, country_id, name, description, duration, fees, start_date, end_date, status } = request.body
    try 
    {
        const insertionResult = await Course.add(university_id, country_id, name, description, duration, fees, start_date, end_date, status);
        
        // Check the return code to determine success or failure
        if (insertionResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': 'Country Added Successfully', 'output': []});
        }
        else 
        {
            response.status(400).send({'returncode': 1, 'message': insertionResult.message, 'output': insertionResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(400).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});

// Update 
router.post("/update/course", async function(request, response)
{
    const { university_id, country_id, name, description, duration, fees, start_date, end_date, status, course_id } = request.body
    try 
    {
        const updateResult = await Course.update(university_id, country_id, name, description, duration, fees, start_date, end_date, status, course_id);
        
        // Check the return code to determine success or failure
        if (updateResult.returncode === 0)
        {
            response.status(200).send({'returncode': 0, 'message': updateResult.message, 'output': []});
        }
        else 
        {
            response.status(400).send({'returncode': 1, 'message': updateResult.message, 'output': updateResult.output});
        }
    } 
  catch (error)
    {
        // Handle different types of errors (client-side vs server-side)
        if (error.returncode)
        {
            response.status(400).send({'returncode': 1, 'message': error.message, 'output': error.output});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': 'Internal Server Error', 'output': []});
        }
    }
});


module.exports = router;