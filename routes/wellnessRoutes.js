/** @format */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessController');
const auth = require('../controllers/authController');

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
router.get('/manager', auth.verify, auth.manager_page);

//provide route to specific images and files used in the system
router.get('/logo', controller.logo_img);

//provide route to specific styles used in the system
// router.get('/styles', controller.styles);

router.get('/login-bg', controller.login_bg);

router.get('/add-icon', controller.add_icon);
router.get('/update-icon', controller.update_icon);
router.get('/trash-icon', controller.trash);

router.get('/manager_bg', controller.manager_bg);
router.get('/boxing', controller.boxing);
router.get('/mental_health2', controller.mental_health2);
router.get('/managerAdd', auth.verify, controller.managerAdd);
router.get('/managerRemove', auth.verify, controller.managerRemove);
router.post('/addStaff', auth.manager_add_user);
router.get('/addGoal', auth.verify, controller.addGoal);
router.post('/add_Goal', controller.add_Goal);
router.get('/updateGoal', auth.verify, controller.updateGoal);
router.post('/update_Goal', controller.update_Goal);
router.post('/updateStaff', auth.updateStaff);
router.post('/removeStaff', auth.removeStaff);
// router.get('/removeGoal', auth.verify, controller.removeGoal);
// router.post('/remove_Goal', controller.remove_Goal);
router.get('/removeGoal', auth.verify, controller.removeGoal);
router.post('/remove_Goal', controller.remove_Goal);
router.get('/managerUpdate', auth.verify, controller.managerUpdate);
router.get('/signup', controller.signUp_page);
// router.get('/about', function (req, res) {
// 	res.redirect('/about.html');
// });
router.get('/fitness_goals', auth.verify, controller.fitness_goals);
router.get('/nutrition_goals', auth.verify, controller.nutrition_goals);
router.get('/mental_health_goals', auth.verify, controller.mental_health_goals);
router.get('/fitness', controller.fitness_page);
router.get('/fitness_1', controller.fitness_1);
// router.get('/nutrition', controller.nutrition_page);
router.get('/nutrition_1', controller.nutrition_1);
router.get('/nutrition_2', controller.nutrition_2);
router.get('/nutrition_3', controller.nutrition_3);
router.get('/nutrition_bg', controller.nutrition_bg);
router.get('/mental_health_1', controller.mental_health_1);
router.get('/mental_health', controller.mental_health);
// router.get('/"Mental Health"', controller.mentalHealth_page);

//process the routes for the new login
// router.post('/staff_signup', controller.staff_signup);
router.post('/staff_signup', auth.post_new_user);

// router.post('/staff_login', controller.loginValidation);
router.post('/staff_login', auth.login, auth.loggedIn_landing);
router.get('/wellness', auth.verify, controller.wellness);
router.get('/logout', auth.logout, controller.logout);

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
