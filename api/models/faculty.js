const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    faculty_name: {type : String, required: true},
    faculty_photo: String,
    faculty_email: {
        type: String,
        required:true,
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    faculty_password: {type : String, required: true},
    faculty_contact_number:{
        type: number,
        required:true,
        match: /^[0-9]*$/
    },
    faculty_educational_details: String,
    faculty_area_interest: String
});

module.exports =  mongoose.model('Faculty', facultySchema);


