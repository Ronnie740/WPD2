/** @format */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessController');

//const bodyParser = require('body-parser');

// router.get('/', function (req, res) {
// 	res.send('Hello! Welcome to the guestbook application.');
// });
router.get('/', controller.landing_page);
router.get('/about', controller.about);
router.get('/login', controller.login_page);
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
router.get('/update-icon', controller.update_icon);
router.get('/trash-icon', controller.trash);

router.get('/manager_bg', controller.manager_bg);
router.get('/managerAdd', controller.managerAdd);
router.get('/managerRemove', controller.managerRemove);
router.post('/addStaff', controller.addStaff);
router.get('/addGoal', controller.addGoal);
router.post('/add_Goal', controller.add_Goal);
router.get('/updateGoal', controller.updateGoal);
router.post('/update_Goal', controller.update_Goal);
router.post('/updateStaff', controller.updateStaff);
router.post('/removeStaff', controller.removeStaff);
router.get('/removeGoal', controller.removeGoal);
router.post('/remove_Goal', controller.remove_Goal);
router.get('/removeGoal', controller.removeGoal);
router.post('/remove_Goal', controller.remove_Goal);
router.get('/managerUpdate', controller.managerUpdate);
router.get('/signup', controller.signUp_page);
// router.get('/about', function (req, res) {
// 	res.redirect('/about.html');
// });
router.get('/fitness_goals', controller.fitness_goals);
router.get('/nutrition_goals', controller.nutrition_goals);
router.get('/mental_health_goals', controller.mental_health_goals);
router.get('/fitness', controller.fitness_page);
router.get('/fitness_1', controller.fitness_1);
router.get('/nutrition', controller.nutrition_page);
router.get('/nutrition_1', controller.nutrition_1);
router.get('/mental_health_1', controller.mental_health_1);
router.get('/mental_health', controller.mental_health);
// router.get('/"Mental Health"', controller.mentalHealth_page);

//process the routes for the new login
router.post('/staff_signup', controller.staff_signup);
router.post('/staff_login', controller.loginValidation);
router.get('/wellness', controller.wellness);

router.get('/about-bg', controller.about_bg);
router.get('/fitness-bg', controller.fitness_bg);
router.get('/checked', controller.checked);
//error handling
router.use(function (req, res) {
	res.status(404);
	res.type('text/plain');
	res.send('Not Found');
});

module.exports = router;
