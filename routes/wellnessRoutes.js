/** @format */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/wellnessController');
const auth = require('../controllers/authController');

router.get('/', controller.landing_page);
router.get('/about', controller.about);
router.get('/login', controller.login_page);
router.get('/manager', auth.verify, auth.manager_page);
router.get('/managerAdd', auth.verify, controller.managerAdd);
router.get('/managerRemove', auth.verify, controller.managerRemove);
router.post('/addStaff', auth.manager_add_user);
router.get('/addGoal', auth.verify, controller.addGoal);
router.post('/add_Goal', controller.add_Goal);
router.get('/updateGoal', auth.verify, controller.updateGoal);
router.post('/update_Goal', controller.update_Goal);
router.post('/updateStaff', auth.updateStaff);
router.post('/removeStaff', auth.removeStaff);
router.get('/removeGoal', auth.verify, controller.removeGoal);
router.post('/remove_Goal', controller.remove_Goal);
router.get('/managerUpdate', auth.verify, controller.managerUpdate);
router.get('/signup', controller.signUp_page);
router.get('/fitness_goals', auth.verify, controller.fitness_goals);
router.get('/nutrition_goals', auth.verify, controller.nutrition_goals);
router.get('/mental_health_goals', auth.verify, controller.mental_health_goals);
router.post('/staff_signup', auth.post_new_user);
router.post('/staff_login', auth.login, auth.loggedIn_landing);
router.get('/wellness', auth.verify, controller.wellness);
router.get('/logout', auth.logout, controller.logout);
//error handling
router.use(function (req, res) {
	res.status(404);
	res.type('text/plain');
	res.send('Not Found');
});

module.exports = router;
