const Student = require('../models/StudentModel')
const Student = require('../models/StudentModel')

//show the list of Students
const index = (req, res, next) => {
    Student.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured!"
        })
    })
}

//show single Student
const show = (req, res, next) => {
    let studentID = req.body.studentID
    Student.findById(studentID)
    .then(response => {
        res.json({
            response 
        })
    })
    .catch(error =>{
        res.json({
        message: 'An error occured!'
    })
  })
}

//add new student
const store = (req, res, next) => {
    let Student = new Student({
        name: req.body.name,
        age: req.body.age,
        roll: req.body.roll,
        class: req.body.class,
        phone: req.body.phone,
        address: req.body.address
    })
    Student.save()
    .then(response => {
        res.json({
            message: 'student added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

// update an employee
const update = (req, res, next) => {
    let studentID = req.body.studentID

    let updateData = {
        name: req.body.name,
        age: req.body.age,
        roll: req.body.roll,
        class: req.body.class,
        phone: req.body.phone,
        address: req.body.address
    }

    Student.findByIdAndUpdate(studentID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Student updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//delete an student
const destroy = (req, res, next) => {
    let studentID = req.body.studentID
    Student.findByIdAndRemove(studentID)
    .then(() => {
        req.json({
            message: 'student deleted successfully!'
        })
    })
    .catch(error => {
        req.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}