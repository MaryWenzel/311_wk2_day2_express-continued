const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comments')

// GET COMMENTS
router.get('/comments', commentController.list);

// GET COMMENTS BY ID
router.get('/comments/:id', commentController.show)

// CREATE NEW COMMENT
router.post('/comments', commentController.create);

module.exports = router