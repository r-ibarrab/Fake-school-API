function success(req,res,body,status){
    const statusCode = status ? status : 200
    const bodyMessage = body ? body : "Success"

    res.status(statusCode).json({
        error:false,
        body:bodyMessage,
        status:statusCode
    })
}

function error(req,res,err){
    const statusCode = err.status ? err.status : 500
    const bodyMessage = err.message ? err.message : "Internal Server Error"

    res.status(statusCode).json({
        error:true,
        body:bodyMessage,
        status:statusCode
    })
}

module.exports = {
    error,
    success
}