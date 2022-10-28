/** @format */

const { response } = require('express');
const nedb = require('nedb');

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
	newStaff(name, email, password) {
		if (name && email && password) {
			this.db.insert({ fname: name, email: email, password: password });
		} else {
			console.log('Please fill in all fields');
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
