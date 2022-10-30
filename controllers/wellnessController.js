/** @format */

const staffDAO = require('../model/wellnessModel');
const db = new staffDAO('staff.db');
//db.init();
console.log('db created');

const express = require('express');
const app = express();

//import the path module and set it to the public folder
//the reason for having the path here is that the load times of the static files is much faster as opposed
//to having it in the index.js file and redirecting requests to that.
const path = require('path');
const public = path.join(__dirname, '../public/');
const views = path.join(__dirname, '../views/');
app.use(express.static(public));
// app.use(express.urlencoded({ extended: false }));

exports.landing_page = function (req, res) {
	// res.send('<h1>Landing page</h1>');
	res.sendFile(path.join(public, '/index.html'));
};
exports.login_page = function (req, res) {
	//res.send('<h1>Landing page</h1>');
	res.sendFile(path.join(public, '/login.html'));
	// res.sendFile('/Users/ronnie/Documents/Year 4 Courses/Web Platform Dev/Cw1/public/login.html');
};
exports.signUp_page = function (req, res) {
	//res.send('<h1>Landing page</h1>');
	res.sendFile(path.join(public, './signup.html'));
};
exports.manager_page = function (req, res) {
	//res.send('<h1>Landing page</h1>');
	// res.sendFile(path.join(public, './manager.html'));
	db.getAllEntries()
		.then((list) => {
			res.render('manager', {
				employees: list,
			});
			console.log('Promise Resolved');
		})
		.catch((err) => {
			console.log(err);
		});
	// res.render('manager');
};
exports.goals_page = function (req, res) {
	res.send('<h1>Landing page</h1>');
	// res.sendFile(path.join(__dirname, './public/index.html'));
};
exports.fitness_page = function (req, res) {
	res.send('<h1>Landing page</h1>');
	// res.sendFile(path.join(__dirname, './public/index.html'));
};
exports.nutrition_page = function (req, res) {
	res.send('<h1>Landing page</h1>');
	// res.sendFile(path.join(__dirname, './public/index.html'));
};
exports.logo_img = function (req, res) {
	res.sendFile(path.join(public, './images/logo.png'));
};

exports.about_bg = function (req, res) {
	res.sendFile(path.join(public, './images/8225.jpg'));
};
exports.add_icon = function (req, res) {
	res.sendFile(path.join(public, './images/add.png'));
};
exports.trash = function (req, res) {
	res.sendFile(path.join(public, './images/trash.png'));
};
exports.manager_bg = function (req, res) {
	res.sendFile(path.join(public, './images/manager.jpg'));
};

exports.login_bg = function (req, res) {
	res.sendFile(path.join(public, './images/Mobile-login-Cristina.jpg'));
};
exports.staff_login = function (req, res) {
	//console.log(req.body);
	// this.db.insert({ fname: req.body.fname, email: req.body.email, password: req.body.password }, function (err, doc) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		// res.render('guestbook', { entry: doc });
	// 		console.log('success');
	// 		console.log(JSON.stringify(doc));
	// 		db.getAllEntries();
	// 	}
	// });
	//insert new staff members

	db.newStaff(req.body.fname, req.body.email, req.body.password);
	console.log(`Full Name: ${req.body.fname}, Email: ${req.body.email}, Password: ${req.body.password}`);
	res.send(`Thank you for logging in: Full Name: ${req.body.fname}, Email: ${req.body.email}, Password: ${req.body.password}`);
};
exports.managerAdd = function (req, res) {
	res.sendFile(path.join(public, '/addStaff.html'));
};
exports.managerRemove = function (req, res) {
	res.sendFile(path.join(public, '/removeStaff.html'));
};
exports.addStaff = function (req, res) {
	db.addStaff(req.body.fname, req.body.email, req.body.position);
	console.log(`Full Name: ${req.body.fname}, Email: ${req.body.email}, Job Title: ${req.body.position}`);
	res.send(`You have just created a profile for: <br/> Full Name: ${req.body.fname},<br/>  Email: ${req.body.email},<br/>  Job Title: ${req.body.position}`);
};
exports.removeStaff = function (req, res) {
	if (!req.body.id) {
		res.send(`The employee doesn't exist`);
	} else {
		console.log(`Employee No. ${req.body.id}`);
		db.removeStaff(req.body.id);
		res.send(`The employee has been removed from the database`);
	}
};

// exports.about_page = function (req, res) {
// 	res.send('<h1>About Us</h1>');
// };
