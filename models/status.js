//dependencies:
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema:

var question = new mongoose.Schema({

    question_line: String,


});

var patient = new mongoose.Schema({

    patientid: String,
    created_at2: { type: Date, default: Date.now },

});

var doctorSchema = new mongoose.Schema({
		doctorname: String,
		email: { type: String, lowercase: true, unique: true },
		password: String,
		profesion: String,
		phonenumber: String,
		city: String,
		question: [question],
		patient: [patient],

});


var Patient2 = mongoose.model('Patient2', patient);
var Doctor = mongoose.model('Doctor', doctorSchema);

//return models:
module.exports= restful.model('doctorlist',doctorSchema);

