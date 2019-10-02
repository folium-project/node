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

import {IStringAnyMap, IStringTMap} from '../types'
import {IEntity} from './entity'

export type IEntityConstructor = new (state: IStringAnyMap) => IEntity

export interface IStringEntityConstructorMap extends IStringTMap<IEntityConstructor> {}

export interface IEntityFactory {
  fromJson(state: string, klass?: string | IEntityConstructor): IEntity
  fromObject(state: IStringAnyMap, klass?: string | IEntityConstructor): IEntity
}

export class EntityFactory implements IEntityFactory {
  public static instance() {
    if (!EntityFactory.factoryInstance) {
      EntityFactory.factoryInstance = new EntityFactory()
    }
    return EntityFactory.factoryInstance
  }

  protected static factoryInstance?: EntityFactory

  protected repository: IStringEntityConstructorMap = {}

  public findKlass(name: string): IEntityConstructor {
    if (!this.repository[name]) {
      throw new Error(`No class '${name}' detected in repository.`)
    }
    return this.repository[name]
  }

  public fromJson(state: string, klass?: string | IEntityConstructor): IEntity {
    return this.fromObject(JSON.parse(state), klass)
  }

  public fromObject(state: IStringAnyMap, klass?: string | IEntityConstructor): IEntity {
    if (!klass) {
      throw new Error('`klass` not stated')
    }
    if (typeof klass === 'string') {
      const klass2 = this.repository[klass] as IEntityConstructor
      return new klass2(state)
    }
    return new klass(state)
  }

  public registerKlass(name: string, klass: IEntityConstructor) {
    this.repository[name] = klass
  }
}
