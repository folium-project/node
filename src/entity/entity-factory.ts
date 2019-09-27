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

import {IEntity} from './entity'
import {IStringAnyMap, IStringTMap} from '../types'

export interface IEntityFactory {
  fake<T extends IEntity>(klass?: {new (state: IStringAnyMap): T}): T
  fromJson<T extends IEntity>(state: string, klass?: {new (state: IStringAnyMap): T}): T
  fromObject<T extends IEntity>(state: IStringAnyMap, klass?: {new (state: IStringAnyMap): T}): T
}

export interface EntityPrototype {
  (): IEntity
}

export class EntityFactory implements IEntityFactory {
  protected static _instance?: EntityFactory

  public static instance() {
    if (!EntityFactory._instance) {
      EntityFactory._instance = new EntityFactory()
    }
    return EntityFactory._instance
  }

  fake<T extends IEntity>(klass?: {new (state: IStringAnyMap): T}): T {
    return this.fromObject({}, klass)
  }

  fromJson<T extends IEntity>(state: string, klass?: {new (state: IStringAnyMap): T}): T {
    return this.fromObject(JSON.parse(state), klass)
  }

  fromObject<T extends IEntity>(state: IStringAnyMap, klass?: {new (state: IStringAnyMap): T}): T {
    if (!klass) {
      throw new Error('`klass` not stated')
    }
    return new klass(state)
  }
}
