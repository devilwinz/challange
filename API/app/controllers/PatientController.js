const db = require('../../migration');
const Patient = require('../models/Patient');

module.exports = {
	createPatient: (req, res, next) => {
      	const patientData = {
      		name: req.body.name,
	      	patient_id: req.body.patient_id,
	      	date: req.body.date,
	      	problem: req.body.problem,
	      	recipe: req.body.recipe,
	      	price: req.body.price,
	      	insurance: req.body.insurance,
	      	insurance_name: req.body.insurance_name,
	      	insurance_cover: req.body.insurance_cover
      	}
      	
      	const patient = new Patient(patientData);

      	db.query(patient.addPatient(), (err, result) => {
        	if (err) {
	            res.status(400).json({
	               'error': err.message,
	               'error_line': err.files,
	            })
        	};

        	res.status(200).send("pasien berhasil ditambahkan")
      	});
   	},

   	getPatient: (req, res, next) => {
   		res.render('pasien')
   	}
};