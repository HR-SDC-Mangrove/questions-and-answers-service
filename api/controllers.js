const db = require('../service/db')
const { filter, forEach } = require('lodash')
const helpers = require('./helpers')

module.exports = {
    getQuestions: (req, res) => {
        let { product_id, page, count } = req.query

        page = page || 1
        count = count || 5

        db.getQuestions(product_id)
            .then((q) => {
                const { data } = q.rows[0]

                res.status(200).send(helpers.formatQuestions(data, product_id))
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    },

    getAnswers: (req, res) => {
        let { page, count } = req.query
        const { question_id } = req.params

        page = page || 1
        count = count || 5

        db.getAnswers(question_id)
            .then((a) => {
                const { data } = a.rows[0]

                res.status(200).send(helpers.formatAnswers(data, question_id, page, count))
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    },

    postQuestion: (req, res) => {
      let { body, name, email, product_id } = req.body;

      db.postQuestion(body, name, email, product_id)
      .then(() => {
        res.sendStatus(201)
      })
      .catch(err => {
        res.status(400).send(err);
      });
    },

    postAnswer: (req, res) => {
      let { question_id } = req.params;
      let { body, name, email, photos } = req.body;

      db.postAnswer(question_id, body, name, email, photos)
      .then(() => {
        res.sendStatus(201)
      })
      .catch(err => {
        res.status(400).send(err);
      });
    },

    markQuestionHelpful: (req, res) => {
      let { question_id } = req.params;

      db.markQuestionHelpful(question_id)
      .then(() => {
        res.sendStatus(204)
      })
      .catch(err => {
        res.status(400).send(err);
      });
    },

    reportQuestion: (req, res) => {
      let { question_id } = req.params;

      db.reportQuestion(question_id)
      .then(() => {
        res.sendStatus(204)
      })
      .catch(err => {
        res.status(400).send(err);
      });
    },

    markAnswerHelpful: (req, res) => {
      let { answer_id } = req.params;

      db.markAnswerHelpful(answer_id)
      .then(() => {
        res.sendStatus(204)
      })
      .catch(err => {
        res.status(400).send(err);
      });
    },

    reportAnswer: (req, res) => {
      let { answer_id } = req.params;

      db.reportAnswer(answer_id)
      .then(() => {
        res.sendStatus(204)
      })
      .catch(err => {
        res.status(400).send(err);
      });
    }
}
