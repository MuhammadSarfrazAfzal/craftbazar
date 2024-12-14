const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors");
const multer = require("multer");

const app = express()
const port = 5000
const path = require('path')
const services = require('./Model/services.js')
const accountDetail = require('./Model/accountDetail.js')

main()
.then(()=>{
    console.log('Connection succesfully established!')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/craftbazaar'),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
}
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.listen(port,()=>{
    console.log('app is lisntening on 8080')
})

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Save files to "uploads" directory
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname); // Add timestamp to file names
    },
  });
  const upload = multer({ storage });

app.post("/api/accountDetail", async (req, res) => {
    res.send('yaar data arha ha bs')
    try {
        console.log('Reqest Body:',req.body)
      const { fullName, profession, skills, experience } = req.body;
  
      const newaccountDetail = new accountDetail({
        fullName,
        profession,
        skills: skills, 
        experience
      });
  
      await newaccountDetail.save(); // Save to MongoDB
      res.status(200).json({ message: "Profile saved successfully!" });
    } catch (error) {
      console.error("Error saving profile:", error);
      res.status(500).json({ message: "Error saving profile." });
    }
  });