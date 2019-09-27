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

import {IEntity} from '../entity/entity'
import {IStringAnyMap} from '../types.d'
import {ICriteria} from './types.d'

export type IDeletableEntities = IEntity | IEntity[] | null
export type IDeletedEntities = IEntity[] | void

/**
 *
 */
export interface IDeleteOptions extends IStringAnyMap {
  __soft_delete?: boolean
}

/**
 * Generic Interface for implementing CRUD Delete (Destroy) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudGenericDelete {
  /**
   * Delete resource(s) from the database.
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
   * @param {any}            entities Can represent none, one or multiple entities:
   *                                  - if `items` is `null`, method will use the criteria `argument` instead
   * @param {ICriteria}      criteria Delete criteria:
   *                                  - if both `items` and `criteria` are `null`, method is to delete all entities
   *                                  for a specfic type
   * @param {IDeleteOptions} options  Options for how an item is deleted:
   *                                  - `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {any}                   Usually, delete() method should return void; however ocasional APIs could require
   *                                  returning the list of deleted entities data
   */
  delete(entities?: any, criteria?: ICriteria, options?: IDeleteOptions): any
}

/**
 * Interface for implementing CRUD Delete (Destroy) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudDelete extends ICrudGenericDelete {
  /**
   * @param {IDeletableEntities} entities Can represent none, one or multiple entities:
   *                                      - if `items` is `null`, method will use the criteria `argument` instead
   * @param {ICriteria}          criteria Delete criteria:
   *                                      - if both `items` and `criteria` are `null`, method is to delete all entities
   *                                      for a specfic type
   * @param {IDeleteOptions}     options  Options for how an item is deleted:
   *                                      - `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {IDeletedEntities}          Usually, delete() method should return void; however ocasional APIs could
   *                                      require returning the list of deleted elements
   */
  delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): IDeletedEntities
}

/**
 * Interface for implementing CRUD Delete (Destroy) query.
 */
export interface ICrudDeleteQuery {
  /**
   * @param {IDeletableEntities} entities Can represent none, one or multiple entities:
   *                                      - if `items` is `null`, method will use the criteria `argument` instead
   * @param {ICriteria}          criteria Delete criteria:
   *                                      - if both `items` and `criteria` are `null`, method is to delete all entities
   *                                      for a specfic type
   * @param {IDeleteOptions}     options  Options for how an item is deleted:
   *                                      - `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {string}
   */
  delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): string
}
