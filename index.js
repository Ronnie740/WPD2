/** @format */

const express = require('express');
const app = express();

const router = require('./routes/wellnessRoutes');

const mustache = require('mustache-express');
const { abort } = require('process');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

// const path = require('path');
// const public = path.join(__dirname, 'public');
// app.use(express.static(public));
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(3000, () => {
	console.log('Server started on port 3000. Ctrl^c to quit.');
});
