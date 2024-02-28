// <---- Required Libraries ---->
const express = require('express');
const router = express.Router();
router.use(express.json());

// <---- Backend Modules ---->
const University = require('../backend_modules/application/university');
const Student = require('../backend_modules/application/student');

// Add Application
router.post("/add", async function(request, response) 
{
    const { course_id, student_id, app_status } = request.body;

    try 
    {
        const insertionResult = await Student.add(course_id, student_id, app_status);

        if (insertionResult.returncode === 0) 
        {
            response.status(200).send({'returncode': 0, 'message': insertionResult.message, 'output': []});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': insertionResult.message, 'output': []});
        }
    }

    catch (error)
    {
        response.status(500).send({'returncode': 1, 'message': 'Temporary Server Down, Please try again after some time', 'output': []});
    }
});

// Read a Student Application
router.post("/fetch", async function(request, response) 
{
    const { student_id } = request.body;

    try 
    {
        const fetchResult = await Student.read(student_id);

        if (fetchResult.returncode === 0) 
        {
            response.status(200).send({'returncode': 0, 'message': fetchResult.message, 'output': []});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': fetchResult.message, 'output': []});
        }
    }

    catch (error)
    {
        response.status(500).send({'returncode': 1, 'message': 'Temporary Server Down, Please try again after some time', 'output': []});
    }
});

// Read a Student Application
router.get("/fetch/admin", async function(request, response)
{
    try 
    {
        const fetchResult = await University.read();
        
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

// Update Application
router.post("/update", async function(request, response) 
{
    const { app_status, app_id } = request.body;

    try 
    {
        const updateResult = await University.update(app_status, app_id);

        if (updateResult.returncode === 0) 
        {
            response.status(200).send({'returncode': 0, 'message': updateResult.message, 'output': []});
        }
        else 
        {
            response.status(500).send({'returncode': 1, 'message': updateResult.message, 'output': []});
        }
    }

    catch (error)
    {
        response.status(500).send({'returncode': 1, 'message': 'Temporary Server Down, Please try again after some time', 'output': []});
    }
});
