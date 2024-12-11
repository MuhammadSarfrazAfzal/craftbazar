const express = require("express")
const app = express()
const port = 8080
const path = require('path')
const services = require('./Model/services.js')
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.listen(port,()=>{
    console.log('app is lisntening on 8080')
})
app.get("/",(req,res)=>{
    res.send("Bahi bhaj rha hn data sabar kr!")
})