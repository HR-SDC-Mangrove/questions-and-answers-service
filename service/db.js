const { Pool } = require('pg')

// Uses environment variables for config
const pool = new Pool()

module.exports = {
    getQuestions: async (productId) => {
        const data = await pool.query(
            `select up_questions_get(${productId}) as data`
        )
        return data
    },

    getAnswers: async (questionId) => {
        const data = await pool.query(
            `select up_answers_get(${questionId}) as data`
        )
        return data
    },
}
