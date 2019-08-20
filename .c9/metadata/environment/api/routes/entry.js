{"filter":false,"title":"entry.js","tooltip":"/api/routes/entry.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":27,"column":24},"action":"insert","lines":["const express = require('express');","const passport = require('passport');","","const entryController = require('../controllers/entry');","","const router = express.Router();","","// @route   GET api/entries/latest-entries/:id","// @desc    get current entries","// @access  Private","router.get('/latest-entries/:id', passport.authenticate('jwt', { session: false }), entryController.getLatestEntries);","","// @route   POST api/entries/add-entry","// @desc    add an entry","// @access  Private","router.post('/add-entry', passport.authenticate('jwt', { session: false }), entryController.addEntry);","","// @route   PUT api/entries/add-entry","// @desc    add an entry","// @access  Private","router.put('/edit-entry', passport.authenticate('jwt', { session: false }), entryController.editEntry);","","// @route   DELETE api/entries/:id","// @desc    Delete an entry","// @access  Private","router.delete('/:id', passport.authenticate('jwt', { session: false }), entryController.deleteEntry);","","module.exports = router;"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":24},"end":{"row":27,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1565734250769,"hash":"0919d2bf2587b9b6e5f49aa246cd6386ea50e17b"}