/** @format */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessController');

// router.get('/', function (req, res) {
// 	res.send('Hello! Welcome to the guestbook application.');
// });
router.get('/', controller.landing_page);
router.get('/login', controller.login_page);
// router.get('/guestbook', function (req, res) {
// 	res.send('<h1>Guestbook Messages</h1>');
// });

//provide route to specific images and files used in the system
router.get('/logo', controller.logo_img);

//provide route to specific styles used in the system
// router.get('/styles', controller.styles);

router.get('/login-bg', controller.login_bg);
router.get('/signup', controller.signUp_page);
// router.get('/about', function (req, res) {
// 	res.redirect('/about.html');
// });
router.get('/goals', controller.goals_page);
router.get('/fitness', controller.fitness_page);
router.get('/nutrition', controller.nutrition_page);
// router.get('/"Mental Health"', controller.mentalHealth_page);

router.use(function (req, res) {
	res.status(404);
	res.type('text/plain');
	res.send('Not Found');
});

module.exports = router;
