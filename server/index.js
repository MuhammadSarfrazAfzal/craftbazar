const express = require("express")
const mongoose = require('mongoose')
const app = express()
const port = 8080
main()
.then(()=>{
    console.log('Connection succesfully established!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/craftbazaar');

}
app.listen(port,()=>{
    console.log('app is lisntening on 8080')
})
app.get("/",(req,res)=>{
    res.send("Bahi bhaj rha hn data sabar kr!")
})