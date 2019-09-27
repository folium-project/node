import * as uuid from 'uuid'
import {expect} from 'chai'

import {Entity, IEntityState, IEntityCode} from '../src'

export interface IMyEntityState extends IEntityState {}

export class MyEntity extends Entity {
  protected state?: IMyEntityState

  codeGenerate(): IEntityCode {
    return uuid.v4()
  }
}

describe('testing MyEntity implementation', () => {
  it('constructor() should return an object', () => {
    expect(new MyEntity({})).to.not.be.a('null')
    expect(new MyEntity({code: uuid.v4()})).to.not.be.a('null')
  })

  it("constructor() with 'empty' `state` argument (i.e. {}) should return an object with valid .code", () => {
    expect(new MyEntity({}).code).to.be.a('string')
  })

  it('constructor() with `state` argument (i.e. {code: ...}) should not return an object with valid .code', () => {
    let code: string = uuid.v4()
    let myEntity: MyEntity = new MyEntity({
      code,
    })
    expect(myEntity.code).to.be.a('string')
    expect(myEntity.code).to.equal(code)
  })

  it('.toObject() should return an object', () => {
    let myEntityObject = new MyEntity({}).toObject()
    expect(myEntityObject).to.not.be.a('null')
    expect(myEntityObject).to.be.an('object')
  })

  it('.toJson() should return a string', () => {
    let MyEntityJson = new MyEntity({}).toJson()
    expect(MyEntityJson).to.not.be.a('null')
    expect(MyEntityJson).to.be.a('string')
  })

  // it('::fromObject() should return a MyEntity', () => {
  //   expect(MyEntity.fromObject({}, MyEntity)).to.not.be.a('null')
  //   expect(MyEntity.fromObject({}, MyEntity).code).to.be.a('undefined')

  //   expect(MyEntity.fromObject({code: 10}, MyEntity)).to.not.be.a('null')
  //   expect(MyEntity.fromObject({code: 10}, MyEntity).code).to.be.a('number')
  //   expect(MyEntity.fromObject({code: 10}, MyEntity).code).to.equal(10)
  // })

  // it('::fromJson() should return a MyEntity', () => {
  //   expect(MyEntity.fromJson('{}', MyEntity)).to.not.be.a('null')
  //   expect(MyEntity.fromJson('{}', MyEntity).code).to.be.a('undefined')

  //   expect(MyEntity.fromJson('{"id":10}', MyEntity)).to.not.be.a('null')
  //   expect(MyEntity.fromJson('{"id":10}', MyEntity).code).to.be.a('number')
  //   expect(MyEntity.fromJson('{"id":10}', MyEntity).code).to.equal(10)
  // })

  // it('::fake() should return a MyEntity', () => {
  //   expect(MyEntity.fake()).to.not.be.a('null')
  //   expect(MyEntity.fake() instanceof MyEntity).to.be.true
  //   expect(MyEntity.fake().code).to.be.a('undefined')
  // })
})
