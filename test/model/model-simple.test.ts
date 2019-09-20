import {expect} from 'chai'

import {IModelState, Model, IModel} from '../../src/model/model'
import uuid = require('uuid')

interface ISimpleModelState extends IModelState {
  name: string
}

class SimpleModel extends Model implements IModel {
  public static fake(): SimpleModel {
    return new SimpleModel({
      name: 'ana',
    })
  }

  protected state: ISimpleModelState = {
    id: null,
    name: '',
  }

  constructor(state: ISimpleModelState) {
    super(state)
    if (!this.state.id) {
      this.state.id = uuid.v4()
    }
  }

  get name() {
    return this.state.name
  }
}

describe('testing Model implementation', () => {
  it("constructor() with 'empty' `state` argument (i.e. {name:'ana'}) should return an object with string id", () => {
    expect(new SimpleModel({name: 'ana'}).id).to.be.a('string')
  })

  it("constructor() with `state` argument (i.e. {id: uuid.v4(),name: 'ana'}) should not return an object with valid string id", () => {
    let model: SimpleModel = new SimpleModel({
      id: uuid.v4(),
      name: 'ana',
    })
    expect(model.id).to.be.a('string')
  })

  it('.toObject().name should return an string', () => {
    let modelObject = new SimpleModel({
      id: uuid.v4(),
      name: 'ana',
    }).toObject()
    expect(modelObject.name).to.be.an('string')
  })

  it('.toString() should contain @Folum\\Model\\SimpleModel', () => {
    let modelString = new SimpleModel({
      id: uuid.v4(),
      name: 'ana',
    }).toString()
    expect(/^@Folium\\Model\\SimpleModel/.test(modelString)).to.be.true
  })

  it('::fromObject().name should be a string', () => {
    expect(
      SimpleModel.fromObject(
        {
          id: uuid.v4(),
          name: 'ana',
        },
        SimpleModel,
      ).name,
    ).to.be.a('string')
    expect(
      SimpleModel.fromObject(
        {
          name: 'ana',
        },
        SimpleModel,
      ).name,
    ).to.be.a('string')
  })

  it('::fake() should return a SimpleModel', () => {
    expect(SimpleModel.fake() instanceof SimpleModel).to.be.true
    expect(SimpleModel.fake() instanceof Model).to.be.true
  })

  it('::fake().id should return a string', () => {
    expect(SimpleModel.fake().id).to.be.a('string')
  })

  it('::fake().name should return a string', () => {
    expect(SimpleModel.fake().name).to.be.a('string')
  })
})
