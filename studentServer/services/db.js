const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/studentDatabase' ,{
    useNewUrlParser:true
})

const Student = mongoose.model('Student',{
    fname : String,
    lname : String,
    no : Number,
    age : Number,
    gender : String
})

module.exports={
    Student
}