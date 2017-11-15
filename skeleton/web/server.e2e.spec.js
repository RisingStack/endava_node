'use strict'

const nock = require('nock')
const request = require('super-request')
const expect = require('chai').expect
const server = require('../server')
const Product = require('../model/Product')

describe('server e2e', function () {
  describe('GET /products/:prductId', function () {
    const testProduct = {
      _id: 24,
      name: 'test-product',
      price: 999
    }

    beforeEach(async function () {
      await new Product(testProduct).save()
    })

    afterEach(async function () {
      await Product.findOne(testProduct).remove()
    })

    it('should return products with comments - integration', async function () {
      const mockComments = [ { foo: 'bar', baz: 'bang' } ]
      const expectedProduct = Object.assign({}, testProduct, { comments: mockComments })

      nock('https://jsonplaceholder.typicode.com')
        .get('/comments')
        .query({ id: testProduct._id })
        .reply(200, mockComments)

      const response = await request(server)
        .get(`/products/${testProduct._id}`)
        .json(true)
        .expect(200)
        .end()

      expect(response.body).to.deep.equal(expectedProduct)
    })
  })
})
