
module.exports = setErrorNames = (error)=>{
    if(error.message.match(/Cast to ObjectId failed/)){
        error.message = "Wrong ID format"
        error.status = 400
    }

    return error
}