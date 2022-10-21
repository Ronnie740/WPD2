// const guestbookDAO = require('../models/guestbookModel');
// const db = new guestbookDAO();
// db.init();
const express = require('express');
const app = express();

exports.landing_page = function (req, res) {
	res.send('<h1>Landing page</h1>');
	//res.sendFile(path.join(__dirname, './public/index.html'));
};
exports.login_page = function (req, res) {
	//res.send('<h1>Landing page</h1>');
	res.sendFile('/Users/ronnie/Documents/Year 4 Courses/Web Platform Dev/Cw1/public/login.html');
};
exports.signUp_page = function (req, res) {
	res.send('<h1>Landing page</h1>');
	// res.sendFile(path.join(__dirname, './public/index.html'));
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
// exports.about_page = function (req, res) {
// 	res.send('<h1>About Us</h1>');
// };
