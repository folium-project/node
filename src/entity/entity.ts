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
import {IEntityCode, IEntityState} from './entity-state'

export interface IEntity {
  toJson(): string
  toObject(): IStringAnyMap
}

export abstract class Entity implements IEntity {
  protected state?: IEntityState

  constructor(state: IEntityState) {
    this.state = state
    if (!this.state.code) {
      this.state.code = this.codeGenerate()
    }
  }

  // public getValidator()

  public toJson(): string {
    return JSON.stringify(this.toObject())
  }

  public toObject(): IStringAnyMap {
    return this.state as IStringAnyMap
  }

  get code(): IEntityCode {
    return this.state!.code as IEntityCode
  }

  /**
   * We suggest reading {@link https://www.callicoder.com/distributed-unique-id-sequence-number-generator/ |
   * Generating unique IDs in a distributed environment at high scale.} article.
   */
  protected abstract codeGenerate(): IEntityCode
}
