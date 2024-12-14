const mongoose = require('mongoose')
const accountDetailSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    profession: { type: String, required: true },
    skills: [String],
    experience: { type: String, required: true }
    // Stores file name of uploaded picture
  });
const accountDetail = mongoose.model('accountDetail',accountDetailSchema)
module.exports = accountDetail