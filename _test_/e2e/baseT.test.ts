import request from "supertest"
import { app } from "../../src/app"

describe('/', () => {
    beforeAll( async () => {
        await request(app)
            .delete('/zeroing/_test')
    })
    var cteatedPost: any
    it('first test play.zero', async () => {
        await request(app)
        .get('/')
        .expect([])
    })
    it('bad request 401', async () => {
        await request(app)
            .post('/forest')
            .send()
            .expect(401)
    })
    it('post test', async () => {
        cteatedPost = await request(app)
            .post('/forest')
            .send({title: 'lydi hoi na blydi'})
            .expect(201)

            console.log(cteatedPost.body);

    })
    it('put test 200', async () => {
        
        await request(app)
            .put('/forest/' + cteatedPost.body.id)
            .send({title: 'max paravoz'})
            .expect(200)
    })
    it('delete test 204', async () => {
        
        await request(app)
            .delete('/forest/' + cteatedPost.body.id)
            .send()
            .expect(204)
    })
    it('first test play.zero in end', async () => {
        await request(app)
        .get('/forest')
        .expect([])
    })


})