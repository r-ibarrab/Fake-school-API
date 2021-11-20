const response = require('../network/response')
const Teacher = require('../models/teacher')

async function list(req,res){
    const teachers = await Teacher.find({})
    console.log(teachers)
    response.success(req,res,teachers,200)
}

async function get(req, res){
    const teachers = await Teacher.find({_id:req.params.id})
    console.log(teachers)
    response.success(req,res,teachers,200)
}

async function create(req,res){
    const teacher = await Teacher.create(req.body)
    console.log(teacher)
    response.success(req,res,teacher,201)

}

async function remove(req,res){
    const teacher = await Teacher.deleteOne({_id:req.params.id})
    console.log(teacher)
    response.success(req,res,teacher,200)
}

async function update(req,res){
    const teacher = await Teacher.updateOne({_id:req.params.id},{...req.body})
    console.log(teacher)
    response.success(req,res,teacher,200)
}


module.exports = {
    list,
    get,
    create,
    remove,
    update
}