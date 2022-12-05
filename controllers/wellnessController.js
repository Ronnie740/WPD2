/** @format */

const wellnessDAO = require('../model/wellnessModel');
const fitness_goals = new wellnessDAO('fitness.db');
const nutrition_goals = new wellnessDAO('nutrition.db');
const mental_health_goals = new wellnessDAO('mental_health.db');

const express = require('express');
const app = express();

exports.landing_page = function (req, res) {
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
	res.redirect('./wellness.html');
};
exports.logout = function (req, res) {
	res.redirect('/');
};

exports.managerAdd = function (req, res) {
	res.redirect('/addStaff.html');
};
exports.managerRemove = function (req, res) {
	res.redirect('/removeStaff.html');
};
exports.managerUpdate = function (req, res) {
	res.redirect('./updateStaff.html');
};

exports.addGoal = function (req, res) {
	res.redirect('./addGoal.html');
};
exports.removeGoal = function (req, res) {
	res.redirect('./removeGoal.html');
};
exports.updateGoal = function (req, res) {
	res.redirect('./updateGoal.html');
};

//add goals
exports.add_Goal = function (req, res) {
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
	if (req.body.category === 'fitness') {
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

exports.about = function (req, res) {
	res.redirect('/aboutUs.html');
};
