//dependencies:
var express = require('express');
var router = express.Router();


//get models:
var Doctor = require('../models/status');

router.post('/logindoctor', function(req,res){
	var email = req.body.email;
	var password = req.body.password;

	Doctor.findOne({email: email, password: password},function(err,doctor){
			if(err){
				console.log(err);
				return res.status(500).send();

			}
			if(!doctor){
				return res.status(404).send();
			}

			return res.status(200).send(doctor);

	})

});

//routes:
Doctor.methods(['get','post','put','delete']);
Doctor.register(router,'/status');


//get models:
var Patient = require('../models/pacient');

router.post('/loginpatient', function(req,res){
	var email = req.body.email;
	var password = req.body.password;

	Patient.findOne({email: email, password: password},function(err,patient){
			if(err){
				console.log(err);
				return res.status(500).send();

			}
			if(!patient){
				return res.status(404).send();
			}

			return res.status(200).send(patient);

	})

});

//routes:
Patient.methods(['get','post','put','delete']);
Patient.register(router,'/pacient');


//return router:
module.exports = router;



