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

import {IModel, IModelStateID} from '../model/model'
import {IOptions, IStringAnyMap} from '../types'

/**
 * Interface for implementing REST Update (Patch) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IUpdate {
  /**
   * Update/patch a resource in the database.
   * If multiple items are given, all patches will be applied in the given order.
   *
   * update(id, { "text": "I really have to iron" })
   *
   * @param {IModelStateID} id                        id of item to be patched
   * @param {IStringAnyMap|IStringAnyMap[]} items     can be a single element or an array of elements
   * @param {IOptions} options
   * @returns {IModel}                                resource data
   */
  update(id: IModelStateID, items: IStringAnyMap | IStringAnyMap[], options: IOptions): IModel
}

/**
 * Interface for implementing REST Update query.
 */
export interface IUpdateQuery {
  /**
   * Generate string query for `Update.update` method.
   * @see Update.update
   *
   * @param {IModelStateID} id                        id of item to be patched
   * @param {IStringAnyMap|IStringAnyMap[]} items     can be a single element or an array of elements
   * @param {IOptions} options
   * @returns {string}
   */
  update(id: IModelStateID, items: IStringAnyMap | IStringAnyMap[], options: IOptions): string
}
