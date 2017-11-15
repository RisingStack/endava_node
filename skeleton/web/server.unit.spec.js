'use strict'

const request = require('super-request')
const expect = require('chai').expect
const server = require('../server')
const Product = require('../model/Product')
const Comments = require('../model/Comments')
const sinon = require('sinon')

describe('server', function () {
  describe('GET /products/:prductId', function () {
    const testProduct = {
      _id: 24,
      name: 'test-product',
      price: 999
    }

    const sandbox = sinon.sandbox.create()

    afterEach(function () {
      sandbox.restore()
    })

    it('should return products with comments', async function () {
      const mockComments = [ { foo: 'bar', baz: 'bang' } ]
      const mockModel = {
        toObject: function () {
          return testProduct
        }
      }
      const expectedProduct = Object.assign({}, testProduct, { comments: mockComments })

      const getCommentsStub = sandbox.stub(Comments, 'getComments')
        .resolves(mockComments)
      const getProductStub = sandbox.stub(Product,'getById')
        .resolves(mockModel)

      const response = await request(server)
        .get(`/products/${testProduct._id}`)
        .json(true)
        .expect(200)
        .end()

      expect(response.body).to.deep.equal(expectedProduct)
      expect(getCommentsStub.callCount).to.be.equal(1)
      expect(getCommentsStub.getCall(0).args[0]).to.be.equal(testProduct._id)
      expect(getProductStub.callCount).to.be.equal(1)
      expect(getProductStub.getCall(0).args[0]).to.be.equal(testProduct._id)

    })
  })
})
