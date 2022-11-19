const express = require('express');
const router = express.Router();
const Employee = require('../models/EmployeesModels');

// GET employees

router.get('/emp/employees', async (req, res) => {
    
    try {
        const employees = await Employee.find();
        res.status(201).json(employees);
    } catch (er){
        res.status(500).json({message:er.message});
    }
});

/*
{
    "first_name":"rodrigo.elustando",
    "last_name":"rodrigo12345",
    "email_id": "rodrigo.elustando@georgebrown.ca"
}
 */
// POST employees

router.post('/emp/employees', async (req, res) => {
   
    const employee = new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_id: req.body.email_id
    });
   
    try {
        const save_employees = await employee.save();
        res.status(201).json(save_employees);
    }
    catch(er) {
        res.status(500).json({message:er.message});
    }
});

// GET employees by id

router.get('/emp/employees/:id', async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch(er) {
        res.status(500).json({message:er.message});
    }
});

// PUT employees by id
// Update employees by id

router.put('/emp/employees/:id', async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        
        if(req.body.first_name != null) 
        employee.first_name = req.body.first_name;
        
        if(req.body.last_name != null) 
            employee.last_name = req.body.last_name;
        
        if(req.body.email_id != null)
        employee.email_id = req.body.email_id;

        const updated_employee = await employee.save();
        res.status(200).json(updated_employee);
    } catch(er){
        res.status(500).json({message:er.message});
    }
});


// DELETE employees by id

router.delete('/emp/employees/:id', async (req, res) => {

    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        res.status(204).json(employee);
    } catch (er){
        res.status(500).json({message:er.message});
    }
});

module.exports = router;