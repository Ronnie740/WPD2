/** @format */

const Datastore = require('nedb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserDAO {
	constructor(dbFilePath) {
		if (dbFilePath) {
			//embedded
			this.db = new Datastore({ filename: dbFilePath, autoload: true });
		} else {
			//in memory
			this.db = new Datastore();
		}
	}
	// for the demo the password is the bcrypt of the user name
	// init() {
	// 	this.db.insert({
	// 		user: 'Peter',
	// 		password: '$2b$10$I82WRFuGghOMjtu3LLZW9OAMrmYOlMZjEEkh.vx.K2MM05iu5hY2C',
	// 	});
	// 	this.db.insert({
	// 		user: 'Ann',
	// 		password: '$2b$10$bnEYkqZM.MhEF/LycycymOeVwkQONq8kuAUGx6G5tF9UtUcaYDs3S',
	// 	});
	// 	return this;
	// }
	create(username, email, password, position) {
		const that = this;
		bcrypt.hash(password, saltRounds).then(function (hash) {
			var entry = {
				fname: username,
				email: email,
				password: hash,
				Job_Title: position,
			};
			that.db.insert(entry, function (err) {
				if (err) {
					console.log("Can't insert user: ", username);
				}
			});
		});
	}
	emailLookup(user, cb) {
		this.db.find({ email: user }, function (err, entries) {
			if (err) {
				return cb(null, null);
			} else {
				if (entries.length == 0) {
					return cb(null, null);
				}
				return cb(null, entries[0]);
			}
		});
	}
	lookup(user, cb) {
		this.db.find({ user: user }, function (err, entries) {
			if (err) {
				return cb(null, null);
			} else {
				if (entries.length == 0) {
					return cb(null, null);
				}
				return cb(null, entries[0]);
			}
		});
	}
	//manager add staff
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
}
module.exports = UserDAO;
