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
import {IOptions} from '../types'

/**
 * Interface for implementing REST Replace method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IReplace {
  /**
   * Replace a resource or set of resources in the database.
   * If a resource does not exists when passed to the update method, it will be created.
   *
   * replace([
   *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
   *   { "text": "Do laundry" } # this item will be created
   * ])
   *
   * @param {IModel|IModel[]} items can be a single element or an array of elements
   * @param {IOptions} options
   * @returns {IModelStateID}       will return the ids of the elements updated
   */
  replace(items: IModel | IModel[], options: IOptions): IModelStateID[]
}

/**
 * Interface for implementing REST Replace query.
 */
export interface IReplaceQuery {
  /**
   * Generate string query for `Replace.replace` method.
   * @see Replace.replace
   *
   * @param {IModel|IModel[]} items can be a single element or an array of elements
   * @param {IOptions} options
   * @returns {string}
   */
  replace(items: IModel | IModel[], options: IOptions): string
}
