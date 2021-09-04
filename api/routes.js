const router = require('express').Router();
const controllers = require('./controllers');

// Get routes
router.get('/questions', controllers.getQuestions);
router.get('/questions/:question_id/answers', controllers.getAnswers);

// Post routes
router.post('/questions', (req, res) => {});

module.exports = router;