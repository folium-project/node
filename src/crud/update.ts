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
import {IReadCriteria} from './read'

export type IUpdateCriteria = IReadCriteria

/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface IUpdate {
  /**
   * Update/replace a resource or set of resources in the database.
   * If a resource does not exists when passed to the update method, it will be created.
   *
   * If `criteria` is given, method will then function as an 'update/patch' handler, not as a 'replace' one.
   * If `criteria` is given and `items` are multiple, function will apply all all items as patch.
   * If `criteria` is not give, and resource is not having an ID, method will try to create the resource.
   *
   * update({ "text": "I really have to iron" }, [ ( 'id', 10 ) ]) # behave as patch (update)
   *
   * or
   *
   * update([
   *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
   *   { "text": "Do laundry" ] # this item will be created
   * ])
   *
   * @param {IModel|IModel[]}   items    can be a single element or an array of elements
   * @param {IUpdateCriteria}   criteria criteria to filter database data
   * @param {IOptions}          options  TODO: to be defined
   * @returns {IModelStateID[]}          will return the ids of the elements updated
   */
  update(items: IModel | IModel[], criteria: IUpdateCriteria, options: IOptions): IModelStateID[]
}

/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface IUpdateQuery {
  /**
   * Generate string query for `Update.update` method.
   * @see Update.update
   *
   * @param {IModel|IModel[]}   items    can be a single element or an array of elements
   * @param {IUpdateCriteria}   criteria criteria to filter database data
   * @param {IOptions}          options  TODO: to be defined
   * @returns {string}
   */
  update(items: IModel | IModel[], criteria: IUpdateCriteria, options: IOptions): string
}
