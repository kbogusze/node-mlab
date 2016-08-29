//dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema:

var diagnosis = new mongoose.Schema({
    diagnosis_line: String,
    created_at2: { type: Date, default: Date.now },
});


var question = new mongoose.Schema({

    question_line: String,
    anserw_line: String,

});

var ankieta = new mongoose.Schema({
	doctorname: String,
    doctoremail: String,
    question: [question],
    diagnosis: [diagnosis],
    created_at1: { type: Date, default: Date.now },
});

var pacientSchema = new mongoose.Schema({
     pacientname: { type: String, lowercase: true},
     email: { type: String, lowercase: true, unique: true },
     password: String,
     age: Number,
     city: String,
     phonenumber: Number,
     ankieta: [ankieta],
});






//var PacientSchema  = mongoose.model('Pacient', (pacientSchema);
var Ankieta = mongoose.model('Ankieta', ankieta);
var Question  = mongoose.model('Question ', question );
var Diagnosis = mongoose.model('Diagnosis', diagnosis);
var Patient = mongoose.model('Patient', pacientSchema);



//return models:
module.exports= restful.model('pacientid' ,pacientSchema);
