const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
        _id: String,
        studentname: String,
        gender: Boolean,
        birthday: Date,
        phone: String,
        address: String,
        classId: String,
        email: String,
        avatar: String
    }, {
        versionKey: false 
});

var Student = mongoose.model('Student', studentSchema, 'students');

module.exports = Student;