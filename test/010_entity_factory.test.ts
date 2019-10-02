import * as uuid from 'uuid'
import {expect} from 'chai'

import {EntityFactory} from '../src'
import {MyEntity} from './001_entity.test'

describe('testing EntityFactory implementation', () => {
  let entityFactory: EntityFactory

  before(() => {
    entityFactory = new EntityFactory()
  })

  it('EntityFactory::instance() should return EntityFactory instance', () => {
    expect(EntityFactory.instance()).to.not.be.a('null')
    expect(EntityFactory.instance() instanceof EntityFactory).to.be.true
  })

  it('EntityFactory::fromObject({...}) to throw an error', () => {
    const call = () => {
      EntityFactory.instance().fromObject({})
    }
    expect(call).to.throw(Error)
    expect(call).to.throw('`klass` not stated')
  })

  it('EntityFactory::fromObject({...}, MyEntity) should return a MyEntity', () => {
    let entity: MyEntity = entityFactory.fromObject({}, MyEntity) as MyEntity

    expect(entity).to.not.be.a('null')
    expect(entity.code).to.be.a('string')

    const code: string = uuid.v4().toString()
    entity = entityFactory.fromObject({code: code}, MyEntity) as MyEntity
    expect(entity).to.not.be.a('null')
    expect(entity.code).to.be.a('string')
    expect(entity.code).to.equal(code)
  })

  it("EntityFactory::fromJson('{...}', MyEntity) should return a MyEntity", () => {
    let entity: MyEntity = entityFactory.fromJson('{}', MyEntity) as MyEntity
    expect(entity).to.not.be.a('null')
    expect(entity.code).to.be.a('string')

    const code: string = uuid.v4().toString()
    const strEntity: string = `{"code":"${code}"}`
    entity = entityFactory.fromJson(strEntity, MyEntity) as MyEntity
    expect(entity).to.not.be.a('null')
    expect(entity.code).to.be.a('string')
    expect(entity.code).to.equal(code)
  })
  it("EntityFactory::::findKlass('{...}') without registerKlass() first should throw error", () => {
    const call = () => entityFactory.findKlass('my-entity')

    expect(call).to.throw(Error)
    expect(call).to.throw(`No class 'my-entity' detected in repository.`)
  })

  it("EntityFactory::registerKlass('{...}', MyEntity),::findKlass('{...}') should return a class constructor", () => {
    entityFactory.registerKlass('my-entity', MyEntity)
    expect(entityFactory.findKlass('my-entity') === MyEntity)
  })

  it("EntityFactory::fromJson('{...}', 'my-entity') should return a MyEntity", () => {
    let entity: MyEntity = entityFactory.fromJson('{}', 'my-entity') as MyEntity
    expect(entity).to.not.be.a('null')
    expect(entity.code).to.be.a('string')

    const code: string = uuid.v4().toString()
    const strEntity: string = `{"code":"${code}"}`
    entity = entityFactory.fromJson(strEntity, 'my-entity') as MyEntity
    expect(entity).to.not.be.a('null')
    expect(entity.code).to.be.a('string')
    expect(entity.code).to.equal(code)
  })
})
