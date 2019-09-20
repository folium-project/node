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

import * as uuid from 'uuid'

import {IStringAnyMap} from '../types'

export type IModelStateID = string | number | null | undefined

export interface IModelState extends IStringAnyMap {
  id?: IModelStateID
}

export interface IModel {
  toObject(): IStringAnyMap
  toJson(): string
  toString(): string
}

type IModelType<T> = new (...args: any[]) => T

export class Model implements IModel {
  public static fromObject<T>(state: IModelState, klass: IModelType<T>) {
    // const instance = Object.create(klass.prototype)
    // instance.state = state
    // return instance as T;
    return new klass(state) as T
  }

  public static fromJson<T>(state: string, klass: IModelType<T>) {
    return Model.fromObject(JSON.parse(state), klass)
  }

  public static fake(): Model {
    return new Model({})
  }

  protected state: IModelState = {}

  constructor(state: IModelState = {}) {
    this.state = Object.assign(this.state, state || {})
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
    if (this.constructor !== Model) {
      return `@Folium\\Model\\${this.constructor.name}\\${this.id}`
    }
    return `@Folium\\Model\\${this.id}`
  }
}
