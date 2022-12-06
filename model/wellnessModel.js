/** @format */

const { response } = require('express');
const nedb = require('nedb');
const { isAbsolute } = require('path');

class Wellness {
	constructor(dbFilePath) {
		if (dbFilePath) {
			this.db = new nedb({ filename: dbFilePath, autoload: true });
			console.log('DB connected to ' + dbFilePath);
		} else {
			this.db = new nedb();
		}
	}
	// remove goal
	removeGoal(id) {
		if (this.db.find({ _id: id })) {
			this.db.remove({ _id: id });
			console.log('Goal ' + id + ' has been removed');
		} else {
			console.log('Goal not found');
		}
	}
	// update goal
	updateGoal(id, goal, start, end) {
		if (this.db.find({ _id: id })) {
			this.db.update({ _id: id }, { $set: { goal: goal, start: start, end: end } });
			console.log('The Goal with ID:', id, ' has been updated to. Goal:', goal, ' From:', start, ' To:', end);
		} else {
			console.log('Goal not found');
		}
	}
	getAllEntries() {
		return new Promise((resolve, reject) => {
			this.db.find({}, function (err, entries) {
				if (err) {
					reject(err);
				} else {
					resolve(entries);
					console.log('returns', entries);
				}
			});
		});
	}
	loginValidation(email, password) {
		return new Promise((resolve, reject) => {
			this.db.find({ email: email, password: password }).exec(function (err, entries) {
				if (err) {
					reject(err);
				} else {
					resolve(entries);
					console.log('loginValidation() returns', entries);
				}
			});
		});
	}
	initGoals() {
		this.db.insert(
			[
				{ startDate: '20-10-2022', endDate: '20-10-2022', goal: 'Drink 3 litres of water a day for a week.' },
				{ startDate: '20-10-2022', endDate: '30-12-2023', goal: 'Drink 5 litres of water a day for a week.' },
			],
			function (err, newDocs) {
				if (err) {
					console.log(err);
				} else {
					console.log(newDocs);
				}
			}
		);
		console.log('documents inserted');
	}

	add_Goal(goal, start, end) {
		if (goal && start && end) {
			this.db.insert({ goal: goal, start: start, end: end });
		} else {
			console.log('Please fill in all fields');
		}
	}
}
module.exports = Wellness;
