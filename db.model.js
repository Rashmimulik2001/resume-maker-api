const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let users = new Schema({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String, //temporary
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    clg: {
        type:String,
        required: true
    },
    email_id: {
        type: String,
        required: true
    },
    roll_no: {
        type: String,
        required: true
    },
    mob_no: {
        type: String,
        required: true
    },
    resume_built: {
        type: Boolean
    }
});
let startup = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
	    type: String,
        required: true
    },
    stall_no: {
        type: String
    },
    requirement: {
        type: Number ,
        default: 0
    },
    no_shortlisted: {
        type: Number,
        default: 0
    },
    no_selected: {
        type: Number,
        default: 0
    }
});
let application = new Schema({
    user_name: {
	type: String
    },
    startup_name: {
	type: String
    },
    status: {
	type: Number
    }
});
let student_resumes = new Schema({
    user_name: {
        type: String
    },
    resume: {
        type: String
    }
})
users = mongoose.model('users', users);
startup = mongoose.model('startup', startup);
application = mongoose.model('application', application);
student_resumes = mongoose.model('student_resumes', student_resumes);
var my_schemas = {'users': users, 'startup': startup, 'applications': application, 'student_resumes': student_resumes};
module.exports = my_schemas;
