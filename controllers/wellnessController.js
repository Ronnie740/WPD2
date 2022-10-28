/** @format */

// const guestbookDAO = require('../models/guestbookModel');
// const db = new guestbookDAO();
// db.init();
const express = require('express');
const app = express();

const path = require('path');
const public = path.join(__dirname, '../public/');
app.use(express.static(public));
app.use(express.urlencoded({ extended: false }));

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

exports.login_bg = function (req, res) {
	res.sendFile(path.join(public, './images/Mobile-login-Cristina.jpg'));
};

// exports.about_page = function (req, res) {
// 	res.send('<h1>About Us</h1>');
// };
