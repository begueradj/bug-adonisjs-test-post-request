'use strict'

const { test, trait } = use('Test/Suite')('User')
const Factory = use('Factory')
trait('Test/ApiClient')

test('Route [GET] /users', async( { client } ) => {
  const response = await client
    .get('/users')
    .end()
  response.assertStatus(200)
})

test('Route [POST] /users', async( { client } ) => {
  const user = Factory
        .model('App/Models/User')
        .create()
  const response = await client
        .post('users')
        .send(user)
        .end()
  response.assertStatus(200)
})
