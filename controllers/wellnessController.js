/** @format */

const wellnessDAO = require('../model/wellnessModel');
// const db = new wellnessDAO('staff.db');
// const goals = new wellnessDAO('goals.db');
const fitness_goals = new wellnessDAO('fitness.db');
const nutrition_goals = new wellnessDAO('nutrition.db');
const mental_health_goals = new wellnessDAO('mental_health.db');
// console.log('db created');
//goals.initGoals();

const express = require('express');
const app = express();

//import the path module and set it to the public folder
//the reason for having the path here is that the load times of the static files is much faster as opposed
//to having it in the index.js file and redirecting requests to that.
// const path = require('path');
// const public = path.join(__dirname, '../public/');
// app.use(express.static(public));

exports.landing_page = function (req, res) {
	// res.sendFile(path.join(public, '/index.html'));
	res.redirect('/index.html');
};
exports.login_page = function (req, res) {
	res.render('user/login');
};
exports.signUp_page = function (req, res) {
	res.render('user/signup');
};
exports.fitness_goals = function (req, res) {
	fitness_goals
		.getAllEntries()
		.then((list) => {
			res.render('fitness', {
				goals: list,
			});
			console.log('Promise Resolved');
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.mental_health_goals = function (req, res) {
	// res.send('<h1>Landing page</h1>');
	// res.sendFile(path.join(__dirname, './public/index.html'));
	mental_health_goals
		.getAllEntries()
		.then((list) => {
			res.render('mental_health', {
				goals: list,
			});
			console.log('Promise Resolved');
		})
		.catch((err) => {
			console.log(err);
		});
};
exports.nutrition_goals = function (req, res) {
	// res.send('<h1>Landing page</h1>');
	// res.sendFile(path.join(__dirname, './public/index.html'));
	nutrition_goals
		.getAllEntries()
		.then((list) => {
			res.render('nutrition', {
				goals: list,
			});
			console.log('Promise Resolved');
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.wellness = function (req, res) {
	// res.sendFile(path.join(public, './wellness.html'));
	res.redirect('./wellness.html');
};
exports.logout = function (req, res) {
	res.redirect('/');
};

exports.managerAdd = function (req, res) {
	// res.sendFile(path.join(public, '/addStaff.html'));
	res.redirect('/addStaff.html');
};
exports.managerRemove = function (req, res) {
	// res.sendFile(path.join(public, '/removeStaff.html'));
	res.redirect('/removeStaff.html');
};
exports.managerUpdate = function (req, res) {
	res.redirect('./updateStaff.html');
	// res.sendFile(path.join(public, './updateStaff.html'));
};

exports.addGoal = function (req, res) {
	res.redirect('./addGoal.html');
	// res.sendFile(path.join(public, './addGoal.html'));
};
exports.removeGoal = function (req, res) {
	res.redirect('./removeGoal.html');
	// res.sendFile(path.join(public, './removeGoal.html'));
};
exports.updateGoal = function (req, res) {
	res.redirect('./updateGoal.html');
	// res.sendFile(path.join(public, './updateGoal.html'));
};

// exports.addStaff = function (req, res) {
// 	db.addStaff(req.body.fname, req.body.email, req.body.position);
// 	console.log(`Full Name: ${req.body.fname}, Email: ${req.body.email}, Job Title: ${req.body.position}`);
// 	console.log(`You have just created a profile for: <br/> Full Name: ${req.body.fname},<br/>  Email: ${req.body.email},<br/>  Job Title: ${req.body.position}`);
// 	res.redirect('/manager');
// };

//add goals
exports.add_Goal = function (req, res) {
	// goals.add_Goal(req.body.goal, req.body.start, req.body.end);
	// console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
	// res.redirect('/fitness_goals');
	if (req.body.category === 'fitness') {
		fitness_goals.add_Goal(req.body.goal, req.body.start, req.body.end);
		console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		res.redirect('/fitness_goals');
	} else if (req.body.category === 'nutrition') {
		nutrition_goals.add_Goal(req.body.goal, req.body.start, req.body.end);
		console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		res.redirect('/nutrition_goals');
	} else {
		mental_health_goals.add_Goal(req.body.goal, req.body.start, req.body.end);
		console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		res.redirect('/mental_health_goals');
	}
};

exports.update_Goal = function (req, res) {
	// goals.updateGoal(req.body.id, req.body.goal, req.body.start, req.body.end);
	// console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
	// res.redirect('/fitness_goals');
	if (req.body.category === 'fitness') {
		fitness_goals.updateGoal(req.body.id, req.body.goal, req.body.start, req.body.end);
		console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		res.redirect('/fitness_goals');
	} else if (req.body.category === 'nutrition') {
		nutrition_goals.updateGoal(req.body.id, req.body.goal, req.body.start, req.body.end);
		console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		res.redirect('/nutrition_goals');
	} else {
		mental_health_goals.updateGoal(req.body.id, req.body.goal, req.body.start, req.body.end);
		console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		res.redirect('/mental_health_goals');
	}
};

exports.remove_Goal = function (req, res) {
	// if (!req.body.id) {
	// 	console.log(`This goal doesn't exist`);
	// 	res.redirect('/fitness_goals');
	// } else {
	// 	console.log(`Goal No. ${req.body.id}`);
	// 	goals.removeGoal(req.body.id);
	// 	console.log(`The Goal has been removed from the database`);
	// }
	// res.redirect('/fitness_goals');
	if (req.body.category === 'fitness') {
		// fitness_goals.updateGoal(req.body.goal, req.body.start, req.body.end);
		// console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		// res.redirect('/fitness_goals');
		if (!req.body.id) {
			console.log(`This goal doesn't exist`);
			res.redirect('/fitness_goals');
		} else {
			console.log(`Goal No. ${req.body.id}`);
			fitness_goals.removeGoal(req.body.id);
			console.log(`The Goal has been removed from the database`);
		}
		res.redirect('/fitness_goals');
	} else if (req.body.category === 'nutrition') {
		// nutrition_goals.updateGoal(req.body.goal, req.body.start, req.body.end);
		// console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		// res.redirect('/nutrition_goals');
		if (!req.body.id) {
			console.log(`This goal doesn't exist`);
			res.redirect('/nutritrion_goals');
		} else {
			console.log(`Goal No. ${req.body.id}`);
			nutrition_goals.removeGoal(req.body.id);
			console.log(`The Goal has been removed from the database`);
		}
		res.redirect('/nutrition_goals');
	} else {
		// mental_health_goals.updateGoal(req.body.goal, req.body.start, req.body.end);
		// console.log(`Your goal:${req.body.goal} will start on ${req.body.start} and end on ${req.body.end}.`);
		// res.redirect('/mental_health_goals');
		if (!req.body.id) {
			console.log(`This goal doesn't exist`);
			res.redirect('/mental_health_goals');
		} else {
			console.log(`Goal No. ${req.body.id}`);
			mental_health_goals.removeGoal(req.body.id);
			console.log(`The Goal has been removed from the database`);
		}
		res.redirect('/mental_health_goals');
	}
};

// exports.removeStaff = function (req, res) {
// 	if (!req.body.id) {
// 		res.send(`The employee doesn't exist`);
// 	} else {
// 		console.log(`Employee No. ${req.body.id}`);
// 		db.removeStaff(req.body.id);
// 		console.log(`The employee has been removed from the database`);
// 	}
// 	res.redirect('/manager');
// };
// exports.updateStaff = function (req, res) {
// 	if (!req.body.id) {
// 		res.send(`The employee doesn't exist`);
// 	} else {
// 		console.log(`Employee No. ${req.body.id}`);
// 		db.updateStaff(req.body.id, req.body.name, req.body.position);
// 		console.log(`The employee has been updated`);
// 		//res.sendFile(path.join(views, './manager.mustache'.to_html()));
// 	}
// 	res.redirect('/manager');
// };

exports.about = function (req, res) {
	// res.send('<h1>Landing page</h1>');
	res.redirect('/aboutUs.html');
};

// exports.about_page = function (req, res) {
// 	res.send('<h1>About Us</h1>');
// };
