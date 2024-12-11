const mongoose = require('mongoose')
const serviceSchema = new mongoose.Schema({
    imgAddress:{
        type:String
    },
    serviceName:{
        type:String
    },
    para:{
        type:String
    },
})
const services = mongoose.model('services',serviceSchema)
module.exports = services