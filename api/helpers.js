module.exports = {
    // Formats questions to be consumed by the API
    formatQuestions(questions, product_id) {
        questions.forEach((q) => {
            q.answers = !q.answers ? [] : q.answers.reduce((acc, cur) => {
                      cur.photos = cur.photos || []

                      cur.photos.forEach((p) => {
                          delete p.answer_id
                      })

                      acc[cur.answer_id] = cur
                      cur.id = cur.answer_id

                      delete cur.answer_id
                      return acc
                  }, {})
        })

        return {
            product_id,
            results: questions,
        }
    },

    // Formats answers to be consumed by the API
    formatAnswers(answers, question_id, page, count) {
        answers.forEach((a) => {
            a.photos = !a.photos ? [] : a.photos.map((p) => {
                      return {
                          id: p.id,
                          url: p.url,
                      }
                  })
        })

        return {
            question: question_id,
            page,
            count,
            results: answers,
        }
    },
}
