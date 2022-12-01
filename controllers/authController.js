/** @format */
// const guestbookDAO = require('../models/guestbookModel');\
const bcrypt = require('bcrypt');
const userDao = require('../model/userModel.js');
const jwt = require('jsonwebtoken');

const db = new userDao('users.db');
exports.post_new_user = function (req, res) {
	const user = req.body.fname;
	const email = req.body.email;
	const password = req.body.password;
	const position = req.body.position;

	if (!user || !email || !password || !position) {
		res.status(401).send('no user or no email or no password or no position');
		return;
	}
	db.lookup(user, function (err, u) {
		if (u) {
			res.status(401).send('User exists:', user);
			return;
		}
		db.create(user, email, password, position);
		console.log('register user', user, 'password', password, 'email', email, 'position', position);
		res.redirect('/login');
	});
};

exports.login = function (req, res, next) {
	let email = req.body.email;
	let password = req.body.password;
	db.lookup(email, function (err, user) {
		if (err) {
			console.log('error looking up user', err);
			return res.status(401).send();
		}
		if (!user) {
			console.log('user ', email, ' not found');
			return res.render('user/signup');
		}
		//compare provided password with stored password
		bcrypt.compare(password, user.password, function (err, result) {
			if (result) {
				//use the payload to store information about the user such as email.
				let payload = { email: user.email };
				//create the access token
				let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 300 });
				res.cookie('jwt', accessToken);
				next();
			} else {
				return res.render('user/login'); //res.status(403).send();
			}
		});
	});
};
exports.verify = function (req, res, next) {
	let accessToken = req.cookies.jwt;
	if (!accessToken) {
		return res.status(403).send();
	}
	let payload;
	try {
		payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
		next();
	} catch (e) {
		//if an error occured return request unauthorized error
		res.status(401).send();
	}
};
exports.loggedIn_landing = function (req, res) {
	res.redirect('/wellness');
};

exports.logout = function (req, res) {
	res.clearCookie('jwt').status(200).redirect('/');
};
