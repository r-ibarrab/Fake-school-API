const express = require('express')
const router = express.Router()

const {
    list,
    get,
    create,
    remove,
    update
} = require('../controllers/student')

router.route('/')
.get(list)
.post(create)

router.route('/:id')
.get(get)
.patch(update)
.delete(remove)




module.exports = router