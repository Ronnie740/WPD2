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
exports.update_icon = function (req, res) {
	res.sendFile(path.join(public, './images/refresh.png'));
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

exports.dashboard = function (req, res) {
	res.sendFile('I am not a file');
};

exports.staff_signup = function (req, res) {
	db.newStaff(req.body.fname, req.body.email, req.body.password, req.body.position);
	//console.log(`Full Name: ${req.body.fname}, Email: ${req.body.email}, Password: ${req.body.password}, Job_Title: ${req.body.position}`);
	//res.send(`Thank you for Signing Up: Full Name: ${req.body.fname}, Email: ${req.body.email}, Password: ${req.body.password},  Job_Title: ${req.body.position}`);
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
};
exports.managerAdd = function (req, res) {
	res.sendFile(path.join(public, '/addStaff.html'));
};
exports.managerRemove = function (req, res) {
	res.sendFile(path.join(public, '/removeStaff.html'));
};
exports.managerUpdate = function (req, res) {
	res.sendFile(path.join(public, './updateStaff.html'));
};
exports.addStaff = function (req, res) {
	db.addStaff(req.body.fname, req.body.email, req.body.position);
	console.log(`Full Name: ${req.body.fname}, Email: ${req.body.email}, Job Title: ${req.body.position}`);
	console.log(`You have just created a profile for: <br/> Full Name: ${req.body.fname},<br/>  Email: ${req.body.email},<br/>  Job Title: ${req.body.position}`);
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
};
exports.removeStaff = function (req, res) {
	if (!req.body.id) {
		res.send(`The employee doesn't exist`);
	} else {
		console.log(`Employee No. ${req.body.id}`);
		db.removeStaff(req.body.id);
		console.log(`The employee has been removed from the database`);
	}
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
};
exports.updateStaff = function (req, res) {
	if (!req.body.id) {
		res.send(`The employee doesn't exist`);
	} else {
		console.log(`Employee No. ${req.body.id}`);
		db.updateStaff(req.body.id, req.body.name, req.body.position);
		console.log(`The employee has been updated`);
		//res.sendFile(path.join(views, './manager.mustache'.to_html()));
	}
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
};

// exports.about_page = function (req, res) {
// 	res.send('<h1>About Us</h1>');
// };
