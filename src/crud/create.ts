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

import {IModel, IModelStateID, IModelState} from '../model/model'
import {IStringAnyMap} from '../types'
import {ICriteria} from './types'

/**
 * Generic Interface for implementing CRUD Create method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudGenericCreate {
  /**
   * Create new resource(s).
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
   * @param {any} items    Can either represent models or data structures matching the data required by the models
   * @param {any} criteria Not used.
   * @returns              Can return either a list of ids of the created resources, either the list of the created 
   *                       resources themselves.
   */
  create(items: any, criteria?: ICriteria): any
}

export type ICrudCreatableItems = IModelState|IModelState[]|IModel|IModel[]
export type ICrudCreatedItems = IModelStateID|IModelStateID[]|IModel|IModel[]

/**
 * Interface for implementing CRUD Create method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudCreate extends ICrudGenericCreate {
  /**
   * @see ICrudGenericCreate.create
   *
   * @param {ICrudCreatableItems} items     Can be a single element or an array of elements
   * @param {ICriteria}           criteria  Not used.
   * @returns {ICrudCreatedItems}           Will return an array of ids for the models that have been saved in the
   *                                        database.
   */
  create(items: ICrudCreatableItems, criteria?: ICriteria): ICrudCreatedItems
}

/**
 * Interface for implementing CRUD Create query.
 */
export interface ICreateQuery {
  /**
   * Generate string query for `ICreate.create` method.
   * @see ICreate.create
   *
   * @param {ICrudCreatableItems} items     Can be a single element or an array of elements
   * @param {ICriteria}           criteria  Not used.
   * @returns {string}
   */
  create(items: ICrudCreatableItems, criteria?: ICriteria): string
}
