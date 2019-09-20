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

import {IModel} from '../model/model'
import {IOptions} from '../types'
import {IReadCriteria} from './read'

export type IDeleteCriteria = IReadCriteria

/**
 *
 */
export interface IDeleteOptions extends IOptions {
  __soft_delete?: boolean
}

/**
 * Interface for implementing CRUD Delete (Destroy) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IDelete {
  /**
   * Delete resource(s) from the database.
   * When `items` is provided, the `criteria` argument will be ignored and will deleted only resources mentioned in
   * `items`.
   * When `items` is null, the `criteria` argument will take charge, giving the change to delete resource by criteria.
   * If `items` is null and `criteria` is [] all stored resource are to be deleted.
   *
   * delete({ "text": "I really have to iron" })
   *
   * or
   *
   * delete([
   *   { "text": "I really have to iron" },
   *   { "text": "Do laundry" }
   * ])
   *
   * or
   *
   * delete([], [
   *   ( 'id', '>', 10 )
   * ])
   *
   * or
   *
   * delete([], [
   *   ( 'id', '>', 10 )
   * ], { '__soft_delete': True })
   *
   * @param {IModel|IModel[]|null} items    can be a single element or an array of elements or null; Default: null
   * @param {IDeleteCriteria}      criteria implementing criteria by which to delete
   * @param {IDeleteOptions}       options  options for how an item is deleted:
   *                                        `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {void}
   */
  delete(items: IModel | IModel[] | null, criteria: IDeleteCriteria, options: IDeleteOptions): void
}

/**
 * Interface for implementing CRUD Delete (Destroy) query.
 */
export interface IDeleteQuery {
  /**
   * Generate string query for `IDelete.delete` method.
   * @see IDelete.delete
   *
   * @param {IModel|IModel[]|null} items    can be a single element or an array of elements or null; Default: null
   * @param {IDeleteCriteria}      criteria implementing criteria by which to delete
   * @param {IDeleteOptions}       options  options for how an item is deleted:
   *                                        `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {string}
   */
  delete(items: IModel | IModel[] | null, criteria: IDeleteCriteria, options: IDeleteOptions): string
}
