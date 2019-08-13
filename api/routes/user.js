const express = require('express');
const cors = require('cors');
const passport = require('passport');

const userController = require('../controllers/user');

const router = express.Router();

// use as middleware for routes that need auth
// passport.authenticate('jwt', {session: false})
// example
// router.get(
//      '/path',
//      passport.authenticate('jwt', {session: false}),
//      (req, res) => ....
// )

// for testing auth route that needs token/cookie once user has logged in
router.get('/testauth', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send('success!');
});

// All routes in this file start with `api/auth`

/*  @route   GET api/auth/test
    @desc    Test auth route
    @access  Public */
router.get('/test', (req, res) => res.json({ msg: 'Auth Route reached' }));

/*  @route   GET api/auth/users
    @desc    Test route to get all users
    @access  Public */
router.get('/users', userController.getUsers);

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.options('/register', cors());
router.post('/register', cors(), userController.validate('register'), userController.register);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', userController.postLogin);

// @route   GET api/auth/current
// @desc    Return current user
// @access  Private
router.get('/current', userController.getCurrentUser);

module.exports = router;