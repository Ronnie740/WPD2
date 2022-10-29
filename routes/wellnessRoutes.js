/** @format */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessController');

//const bodyParser = require('body-parser');

// router.get('/', function (req, res) {
// 	res.send('Hello! Welcome to the guestbook application.');
// });
router.get('/', controller.landing_page);
router.post('/login', controller.login_page);
// router.get('/guestbook', function (req, res) {
// 	res.send('<h1>Guestbook Messages</h1>');
// });
router.get('/manager', controller.manager_page);

//provide route to specific images and files used in the system
router.get('/logo', controller.logo_img);

//provide route to specific styles used in the system
// router.get('/styles', controller.styles);

router.get('/login-bg', controller.login_bg);
router.get('/add-icon', controller.add_icon);
router.get('/trash-icon', controller.trash);
router.get('/manager_bg', controller.manager_bg);
router.get('/signup', controller.signUp_page);
// router.get('/about', function (req, res) {
// 	res.redirect('/about.html');
// });
router.get('/goals', controller.goals_page);
router.get('/fitness', controller.fitness_page);
router.get('/nutrition', controller.nutrition_page);
// router.get('/"Mental Health"', controller.mentalHealth_page);

//process the routes for the new login
router.post('/staff_login', controller.staff_login);

router.get('/about-bg', controller.about_bg);
router.use(function (req, res) {
	res.status(404);
	res.type('text/plain');
	res.send('Not Found');
});

module.exports = router;
