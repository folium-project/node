/**
 * Copyright 2018 IT Media Connect
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uuidv4 = require('uuid/v4')

import {IStringAnyMap} from '../types'

export type IModelStateID = string | number | null | undefined

export interface IModelState {
  id?: IModelStateID
}

export interface IModel {
  toObject(): IStringAnyMap
  toJson(): string
  toString(): string
}

// export type IModels = IModel|IModel[]

export class Model implements IModel {
  private state: IModelState

  constructor(state: IModelState) {
    this.state = state
    if (!this.state.id) {
      this.state.id = uuidv4()
    }
  }

  get id(): IModelStateID {
    return this.state.id
  }

  public toObject(): IStringAnyMap {
    const state: IStringAnyMap = {}
    for (const [key, value] of Object.entries(this.state)) {
      state[key] = value instanceof Model ? value.toObject() : value
    }
    return state
  }

  public toJson(): string {
    return JSON.stringify(this.toObject())
  }

  public toString(): string {
    return `@Model\\${this.constructor.name}\\${this.id}`
  }

  // static fromObject<T extends Model>(state: IModelState, klass: T) {
  // //   const instance = Object.create(klass.prototype)
  // //   instance.state = state
  // //   return instance
  // }

  //   static fromJson<Model>(klass: IModelConstructor<Model>, state: string) {
  //     return Model.fromObject(klass, JSON.parse(state))
  //   }

  //   static fake(): Model {
  //     return new Model({
  //       id: uuid()
  //     })
  //   }
}
