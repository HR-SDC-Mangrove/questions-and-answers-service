const { Pool } = require('pg')

// Uses environment variables for config
const pool = new Pool()

module.exports = {
    getQuestions: (productId) => {
        return pool.query(`select up_questions_get(${productId}) as data`)
    },

    getAnswers: (questionId) => {
        return pool.query(`select up_answers_get(${questionId}) as data`)
    },

    postQuestion: (body, name, email, product_id) => {
        return pool.query(
            `select up_question_post('${body}', '${name}', '${email}', ${product_id})`
        )
    },

    postAnswer: (question_id, body, name, email, photos) => {
        return pool.query(
            `select up_answer_post(${question_id}, '${body}', '${name}', '${email}', array[${photos.map(
                (p) => "'" + p + "'"
            )}])`
        )
    },

    markQuestionHelpful: (question_id) => {
        return pool.query(`select up_question_mark_helpful(${question_id})`)
    },

    reportQuestion: (question_id) => {
        return pool.query(`select up_question_report(${question_id})`)
    },

    markAnswerHelpful: (answer_id) => {
        return pool.query(`select up_answer_mark_helpful(${answer_id})`)
    },

    reportAnswer: (answer_id) => {
        return pool.query(`select up_answer_report(${answer_id})`)
    },

    cleanDB: () => {
      return pool.query('select clean_db()');
    }
}
