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

import {IStringAnyMap} from '../types'

export type IEntityCode = string | number

export interface IEntityState extends IStringAnyMap {
  // id?: any // entity id should be used only at a database level
  // while web services principles state that database ids whould never be presented at web service level
  code?: IEntityCode
}

// export interface IEntityStateValidator {
//   validate(state: IEntityState): boolean | Promise<boolean>
// }

// export abstract class EntityStateValidator implements IEntityStateValidator {
//   protected state: IStringAnyMap = {
//     errors: [],
//   }

//   public async validate(state: IEntityState): Promise<boolean> {
//     if (!state.code) {
//       this.state.errors.push('`code` has no value')
//     }
//     if (this.errors.length) {
//       return false
//     }
//     return true
//   }

//   get errors(): string[] {
//     return this.state.errors
//   }

//   protected appendError(error: string) {
//     this.state.errors.push(error)
//   }

//   protected clearErrors() {
//     this.state.errors = []
//   }
// }
