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
	// init() {
	// 	this.db.insert({
	// 		subject: 'I liked the exhibition',
	// 		contents: 'amazing',
	// 		published: '2022-02-16',
	// 		author: 'Ronnie',
	// 	});
	// 	this.db.insert({
	// 		subject: 'I liked the exhibition',
	// 		contents: 'Horrible',
	// 		published: '2020-02-18',
	// 		author: 'Ronnie',
	// 	});
	// 	console.log('db entry Ronnie inserted');
	// 	this.db.insert({
	// 		subject: 'I liked the exhibition',
	// 		contents: 'amazing',
	// 		published: '2022-02-16',
	// 		author: 'Ann',
	// 	});
	// 	console.log('db entry Ann inserted');
	// }
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
