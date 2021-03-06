const router = require('express').Router();
const controllers = require('./controllers');

// Get routes
router.get('/questions', controllers.getQuestions);
router.get('/questions/:question_id/answers', controllers.getAnswers);

// Post routes
router.post('/questions', controllers.postQuestion);
router.post('/questions/:question_id/answers', controllers.postAnswer);
router.put('/questions/:question_id/helpful', controllers.markQuestionHelpful);
router.put('/questions/:question_id/report', controllers.reportQuestion);
router.put('/answers/:answer_id/helpful', controllers.markAnswerHelpful);
router.put('/answers/:answer_id/report', controllers.reportAnswer);

// Clean DB of test data
router.post('/cleandb', controllers.cleanDB);

module.exports = router;