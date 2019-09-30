// import { IEntityStateValidator } from './../src/entity/entity-state';
// import * as uuid from 'uuid'
// import {expect} from 'chai'

// import {IEntityState, Entity} from '../src'

// export interface IPersonEntityState extends IEntityState {
//   name: string
//   age?: number
//   phone?: string
// }

// export class PersonEntity extends Entity {

//   protected state?: IPersonEntityState

//   codeGenerate(): string {
//     return uuid.v4().toString()
//   }

//   get name(): string {
//     return this.state!.name
//   }

//   get age(): number | undefined {
//     return this.state!.age
//   }

//   get phone(): string | undefined {
//     return this.state!.phone
//   }

// }

// // export class PersonStateValidator extends IEntityStateValidator

// describe('testing EntityFactory implementation', () => {



//   // it('EntityFactory::instance() should return EntityFactory instance', () => {
//   //   expect(EntityFactory.instance()).to.not.be.a('null')
//   //   expect(EntityFactory.instance() instanceof EntityFactory).to.be.true
//   // })

//   // it('EntityFactory::fromObject({...}) to throw an error', () => {
//   //   const call = () => {
//   //     EntityFactory.instance().fromObject({})
//   //   }
//   //   expect(call).to.throw(Error)
//   //   expect(call).to.throw('`klass` not stated')
//   // })

//   // it('EntityFactory::fromObject({...}, MyEntity) should return a MyEntity', () => {
//   //   expect(entityFactory.fromObject({}, MyEntity)).to.not.be.a('null')
//   //   expect(entityFactory.fromObject({}, MyEntity).code).to.be.a('string')

//   //   const code: string = uuid.v4().toString()
//   //   expect(entityFactory.fromObject({code: code}, MyEntity)).to.not.be.a('null')
//   //   expect(entityFactory.fromObject({code: code}, MyEntity).code).to.be.a('string')
//   //   expect(entityFactory.fromObject({code: code}, MyEntity).code).to.equal(code)
//   // })

//   // it('EntityFactory::fromJson(\'{...}\', MyEntity) should return a MyEntity', () => {
//   //   expect(entityFactory.fromJson('{}', MyEntity)).to.not.be.a('null')
//   //   expect(entityFactory.fromJson('{}', MyEntity).code).to.be.a('string')

//   //   const code: string = uuid.v4().toString()
//   //   const entity: string = `{"code":"${code}"}`
//   //   expect(entityFactory.fromJson(entity, MyEntity)).to.not.be.a('null')
//   //   expect(entityFactory.fromJson(entity, MyEntity).code).to.be.a('string')
//   //   expect(entityFactory.fromJson(entity, MyEntity).code).to.equal(code)
//   // })
// })
