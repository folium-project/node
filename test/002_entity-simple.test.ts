import {expect} from 'chai'
import * as uuid  from 'uuid'
import * as faker from 'faker'

import {IEntityState, Entity, IEntity, IEntityCode} from '../src'
import { IStringAnyMap } from '../src/types';

interface ISimpleEntityState extends IEntityState {
  name: string
}

class SimpleEntity extends Entity implements IEntity {

  public codeGenerate(): IEntityCode {
    return uuid.v4().toString()
  }

  get name(): string {
    return this.state!.name
  }
}

describe('testing SimpleEntity implementation', () => {
  it("constructor() with 'empty' `state` argument (i.e. {name:'ana'}) should return an object with string id", () => {
    expect(new SimpleEntity({name: 'ana'}).code).to.be.a('string')
    expect(new SimpleEntity({name: 'ana'}).name).to.be.a('string')
  })

  it("constructor() with `state` argument (i.e. {code: uuid.v4(),name: 'ana'}) should not return an object with valid string id", () => {
    let entity: SimpleEntity = new SimpleEntity({
      code: uuid.v4(),
      name: faker.name.findName(),
    })
    expect(entity.code).to.be.a('string')
    expect(entity.name).to.be.a('string')
  })

  it('SimpleEntity::toObject().name should return an string', () => {
    let entityObject = new SimpleEntity({
      code: uuid.v4(),
      name: faker.name.findName(),
    }).toObject()
    expect(entityObject.name).to.be.an('string')
  })

  // it('EntityFactory::fromObject{(...}, SimpleEntity).name should be a string', () => {
  //   expect(
  //     (new EntityFactory()).fromObject(
  //       {
  //         code: uuid.v4(),
  //         name: faker.name.findName(),
  //       },
  //       SimpleEntity
  //     ).name,
  //   ).to.be.a('string')
  //   expect(
  //     (new EntityFactory()).fromObject(
  //       {
  //         name: faker.name.findName(),
  //       },
  //       SimpleEntity
  //     ).name,
  //   ).to.be.a('string')
  // })
})
