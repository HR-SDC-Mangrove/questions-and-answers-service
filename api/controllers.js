const db = require('../service/db')
const { filter, forEach } = require('lodash')
const helpers = require('./helpers')

module.exports = {
    getQuestions: async (req, res) => {
        let { product_id, page, count } = req.query

        page = page || 1
        count = count || 5

        db.getQuestions(product_id)
            .then((q) => {
                const { data } = q.rows[0]

                res.send(helpers.formatQuestions(data, product_id))
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    },

    getAnswers: async (req, res) => {
        let { page, count } = req.query
        const { question_id } = req.params

        page = page || 1
        count = count || 5

        db.getAnswers(question_id)
            .then((a) => {
                const { data } = a.rows[0]

                res.send(helpers.formatAnswers(data, question_id, page, count))
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    },
}
