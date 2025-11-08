const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// This line creats the new collection in the data base.
mongoose.model('Student', studentSchema);