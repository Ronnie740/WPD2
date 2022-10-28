/** @format */

const staffDAO = require('../model/wellnessModel');
const db = new staffDAO('staff.db');
//db.init();
console.log('db created');

const express = require('express');
const app = express();

//import the path module and set it to the public folder
//the reason for having the path here is that the laod times of the static files is much faster as opposed
//to having it in the index.js file and redirecting requests to that.
const path = require('path');
const public = path.join(__dirname, '../public/');
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

exports.login_bg = function (req, res) {
	res.sendFile(path.join(public, './images/Mobile-login-Cristina.jpg'));
};
exports.staff_login = function (req, res) {
	//console.log(req.body);
	db.insert({ fname: req.body.fname, email: req.body.email, password: req.body.password }, function (err, doc) {
		if (err) {
			console.log(err);
		} else {
			// res.render('guestbook', { entry: doc });
			console.log('success');
			console.log(JSON.stringify(doc));
			db.getAllEntries();
		}
	});
};

// exports.about_page = function (req, res) {
// 	res.send('<h1>About Us</h1>');
// };
