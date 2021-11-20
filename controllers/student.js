const response = require('../network/response')
const Student = require('../models/student')

async function list(req,res){
    const students = await Student.find({})
    console.log(students)
    response.success(req,res,students,200)
}

async function get(req, res){
    const students = await Student.find({_id:req.params.id})
    console.log(students)
    response.success(req,res,students,200)
}

async function create(req,res){
    const student = await Student.create(req.body)
    console.log(student)
    response.success(req,res,student,201)

}

async function remove(req,res){
    const student = await Student.deleteOne({_id:req.params.id})
    console.log(student)
    response.success(req,res,student,201)
}

async function update(req,res){
    const student = await Student.updateOne({_id:req.params.id},{...req.body})
    console.log(student)
    response.success(req,res,student,201)
}


module.exports = {
    list,
    get,
    create,
    remove,
    update
}