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

import {IModelStateID, IModel} from '../model/model'
import {IStringAnyMap} from '../types'

/**
 * TODO: To be defined
 */
export type ICreateCriteria = IStringAnyMap

/**
 * Interface for implementing CRUD Create method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface ICreate {
  /**
   * Create new resource(s).
   * Can receive a item or a set of items to create.
   *
   * create({ "text": "I really have to iron" })
   *
   * or
   *
   * create([
   *   { "text": "I really have to iron" },
   *   { "text": "Do laundry" }
   * ])
   *
   * @param {IModel|IModel[]}   items     Can be a single element or an array of elements
   * @param {ICreateCriteria}   criteria  Default: {}
   * @returns {IModelStateID[]}           Will return an array of ids for the models that have been saved in the database.
   */
  create(items: IModel | IModel[], criteria: ICreateCriteria): IModelStateID[]
}

/**
 * Interface for implementing CRUD Create query.
 */
export interface ICreateQuery {
  /**
   * Generate string query for `ICreate.create` method.
   * @see ICreate.create
   *
   * @param {IModel|IModels[]} items     can be a single element or an array of elements
   * @param {ICreateCriteria}  criteria  Default: {}
   * @returns {string}
   */
  create(items: IModel | IModel[], criteria: ICreateCriteria): string
}
