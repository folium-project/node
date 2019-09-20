import {expect} from 'chai'

import {Model} from '../../src/model/model'

describe('testing Model implementation', () => {
  it('constructor() should return an object', () => {
    expect(new Model()).to.not.be.a('null')
    expect(new Model({})).to.not.be.a('null')
    expect(new Model({id: 10})).to.not.be.a('null')
  })

  it('constructor() without `state` argument should return an object with undefined id', () => {
    expect(new Model().id).to.be.a('undefined')
  })

  it("constructor() with 'empty' `state` argument (i.e. {}) should return an object with undefined id", () => {
    expect(new Model({}).id).to.be.a('undefined')
  })

  it('constructor() with `state` argument (i.e. {id: 10}) should not return an object with valid id', () => {
    let model: Model = new Model({
      id: 10,
    })
    expect(model.id).to.not.be.a('undefined')
    expect(model.id).to.equal(10)
  })

  it('.toObject() should return an object', () => {
    let modelObject = new Model({
      id: 10,
    }).toObject()
    expect(modelObject).to.not.be.a('null')
    expect(modelObject).to.be.an('object')
  })

  it('.toJson() should return a string', () => {
    let modelJson = new Model({
      id: 10,
    }).toJson()
    expect(modelJson).to.not.be.a('null')
    expect(modelJson).to.be.a('string')
  })

  it('.toString() should return a string', () => {
    let modelString = new Model({
      id: 10,
    }).toString()
    expect(modelString).to.not.be.a('null')
    expect(modelString).to.be.a('string')
    expect(/^@Folium\\Model/.test(modelString)).to.be.true
  })

  it('::fromObject() should return a Model', () => {
    expect(Model.fromObject({}, Model)).to.not.be.a('null')
    expect(Model.fromObject({}, Model).id).to.be.a('undefined')

    expect(Model.fromObject({id: 10}, Model)).to.not.be.a('null')
    expect(Model.fromObject({id: 10}, Model).id).to.be.a('number')
    expect(Model.fromObject({id: 10}, Model).id).to.equal(10)
  })

  it('::fromJson() should return a Model', () => {
    expect(Model.fromJson('{}', Model)).to.not.be.a('null')
    expect(Model.fromJson('{}', Model).id).to.be.a('undefined')

    expect(Model.fromJson('{"id":10}', Model)).to.not.be.a('null')
    expect(Model.fromJson('{"id":10}', Model).id).to.be.a('number')
    expect(Model.fromJson('{"id":10}', Model).id).to.equal(10)
  })

  it('::fake() should return a Model', () => {
    expect(Model.fake()).to.not.be.a('null')
    expect(Model.fake() instanceof Model).to.be.true
    expect(Model.fake().id).to.be.a('undefined')
  })
})
