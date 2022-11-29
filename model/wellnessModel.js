/** @format */

const { response } = require('express');
const nedb = require('nedb');
const { isAbsolute } = require('path');

class Staff {
	constructor(dbFilePath) {
		if (dbFilePath) {
			this.db = new nedb({ filename: dbFilePath, autoload: true });
			console.log('DB connected to ' + dbFilePath);
		} else {
			this.db = new nedb();
		}
	}

	// this function allows for new users to be created in the database and works together with the controller
	// to take in the values the user inputted in the form and call this function from the controller to insert the new staff members
	newStaff(name, email, password, position) {
		if (name && email && password && position) {
			this.db.insert({ fname: name, email: email, password: password, Job_Title: position });
		} else {
			console.log('Please fill in all fields');
		}
	}
	//manager add Staff
	addStaff(name, email, position) {
		if (name && email && position) {
			this.db.insert({ fname: name, email: email, Job_Title: position });
		} else {
			console.log('Please fill in all fields');
		}
	}
	//manager remove staff
	removeStaff(id) {
		if (this.db.find({ _id: id })) {
			this.db.remove({ _id: id });
			console.log('Employee No. ' + id + ' has been removed');
		} else {
			console.log('Employee not found');
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
	//manager update staff
	updateStaff(id, name, position) {
		if (this.db.find({ _id: id })) {
			this.db.update({ _id: id }, { $set: { fname: name, Job_Title: position } });
			console.log('The document', id, 'has been updated to. Name:', name, ' Position:', position);
		} else {
			console.log('Employee not found');
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
		// this.db.find({ email: email, password: password }, function (err, docs) {
		// 	if (err) {
		// 		console.log('This employee does not exist');
		// 	} else {
		// 		console.log('Employee found');
		// 		console.log(docs);
		// 	}
		// });
		// if (this.db.find({ email: email, password: password })) {
		// 	console.log('employee exists');
		// } else {
		// 	console.log(`employee doesn't exist`);
		// }
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
					// var newInsert = newDocs.length + 1;
					// console.log('00%s', newInsert);
				}
			}
		);
		// var totalCount = this.db.count({}, (err, count) => {
		// 	if (err) {
		// 		console.log(err);
		// 	} else {
		// 		console.log(count);
		// 	}
		// });
		// console.log(totalCount + 1);
		console.log('documents inserted');
	}

	add_Goal(goal, start, end) {
		if (goal && start && end) {
			this.db.insert({ goal: goal, start: start, end: end });
		} else {
			console.log('Please fill in all fields');
		}
	}

	// getRonnieEntries() {
	// 	return new Promise((resolve, reject) => {
	// 		this.db
	// 			.find({ author: 'Ronnie' })
	// 			.sort({ published: 1 })
	// 			.exec(function (err, entries) {
	// 				if (err) {
	// 					reject(err);
	// 				} else {
	// 					resolve(entries);
	// 					console.log('getRonnieEntries() returns', entries);
	// 				}
	// 			});
	// 	});
	// }
}
module.exports = Staff;
