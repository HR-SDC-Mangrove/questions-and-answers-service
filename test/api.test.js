const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const baseUrl = 'localhost:8888'
const controllers = require('../api/controllers');
const helpers = require('../api/helpers');
const _mockData = require('../test/_mockData');

chai.use(chaiHttp)

describe('API endpoints', function () {
    it('Gets questions for a product', function (done) {
        chai.request(baseUrl)
            .get('/qa/questions?product_id=5')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body.results.length).to.be.gt(0)
                done()
            })

        controllers.getQuestions({
            query: {
                page: 0,
                count: 0,
                product_id: 0,
            },
        })
    })

    it('Gets answers for a question', function (done) {
        chai.request(baseUrl)
            .get('/qa/questions/1/answers')
            .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res.body.results.length).to.be.gt(0)
                done()
            })

        controllers.getAnswers({
            query: {
                page: 0,
                count: 0,
            },
            params: {
                question_id: 0,
            },
        })
    })

    it('Posts a question', function (done) {
        chai.request(baseUrl)
            .post('/qa/questions')
            .send({ body: 'test', name: 'test', email: 'test', product_id: 0 })
            .end((err, res) => {
                expect(res).to.have.status(201)
                done()
            })

        controllers.postQuestion({
            body: {
                body: 'test',
                name: 'test',
                email: 'test',
                product_id: 0,
            },
        })
    })

    it('Posts an answer', function (done) {
        chai.request(baseUrl)
            .post('/qa/questions/0/answers')
            .query({ question_id: 0 })
            .send({
                body: 'test',
                name: 'test',
                email: 'test',
                photos: ['test'],
            })
            .end((err, res) => {
                expect(res).to.have.status(201)
                done()
            })

        controllers.postAnswer({
            params: {
                question_id: 0,
            },
            body: {
                body: 'test',
                name: 'test',
                email: 'test',
                photos: ['test'],
            },
        })
    })

    it('Marks question helpful', function (done) {
        chai.request(baseUrl)
            .put('/qa/questions/0/helpful')
            .query({ question_id: 0 })
            .send()
            .end((err, res) => {
                expect(res).to.have.status(204)
                done()
            })

        controllers.markQuestionHelpful({
            params: {
                question_id: 0,
            },
        })
    })

    it('Reports a question', function (done) {
        chai.request(baseUrl)
            .put('/qa/questions/0/report')
            .query({ question_id: 0 })
            .send()
            .end((err, res) => {
                expect(res).to.have.status(204)
                done()
            })

        controllers.reportQuestion({
            params: {
                question_id: 0,
            },
        })
    })

    it('Marks answer helpful', function (done) {
        chai.request(baseUrl)
            .put('/qa/answers/0/helpful')
            .query({ answer_id: 0 })
            .send()
            .end((err, res) => {
                expect(res).to.have.status(204)
                done()
            })

        controllers.markAnswerHelpful({
            params: {
                answer_id: 0,
            },
        })
    })

    it('Reports an answer', function (done) {
        chai.request(baseUrl)
            .put('/qa/answers/0/report')
            .query({ answer_id: 0 })
            .send()
            .end((err, res) => {
                expect(res).to.have.status(204)
                done()
            })

        controllers.reportAnswer({
            params: {
                answer_id: 0,
            },
        })
    })

    it('Cleans the DB', function (done) {
        chai.request(baseUrl)
            .post('/qa/cleandb')
            .send()
            .end((err, res) => {
                expect(res).to.have.status(200)
                done()
            })

        controllers.cleanDB()
    });

    it('Formats the data correctly', function (done) {
      expect(helpers.formatQuestions(_mockData.input.questions, 5)).to.deep.equal(_mockData.output.questions);
      expect(helpers.formatAnswers(_mockData.input.answers, 1, 1, 5)).to.deep.equal(_mockData.output.answers);
      done();
    })
})
