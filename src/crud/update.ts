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

import {IEntity, IEntityCode, IEntityState} from '../entity/entity'
import {ICriteria} from './types.d'
import {IStringAnyMap} from '../types.d'

/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudGenericUpdate {
  /**
   * Update/replace a resource or set of resources in the database.
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
   * @param {any}           items    Can be one or more entities. If an entity does not exists when passed to the update
   *                                 method, it will be created.
   * @param {ICriteria}     criteria Criteria to update/patch database data:
   *                                 - If `criteria` is given, method will then function as an 'update/patch' handler,
   *                                 not as a 'replace' one.
   *                                 - If `criteria` is given and `items` are multiple, function will apply all all
   *                                 items as patch.
   *                                 - If `criteria` is not given, and resource is not having an ID, method will try to
   *                                 create the resource.
   * @param {IStringAnyMap} options  Not used. Define whatever suits you.
   * @returns {any}                  Can return either a list of ids for the updated/created entities, either the
   *                                 list of the created entities themselves.
   */
  update(items: any, criteria?: ICriteria, options?: IStringAnyMap): any
}

export type IUpdatableItems = IEntityState | IEntityState[] | IEntity | IEntity[]
export type IUpdatedItems = IEntityCode | IEntityCode[]

/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudUpdate extends ICrudGenericUpdate {
  /**
   * @param {IUpdatableItems} items    Can be one or more entities. If an entity does not exists when passed to the update
   *                                   method, it will be created.
   * @param {ICriteria}       criteria criteria to filter database data:
   *                                   - If `criteria` is given, method will then function as an 'update/patch' handler,
   *                                   not as a 'replace' one.
   *                                   - If `criteria` is given and `items` are multiple, function will apply all all
   *                                   items as patch.
   *                                   - If `criteria` is not given, and resource is not having an ID, method will try to
   *                                   create the resource.
   * @param {IOptions}        options  Not used. Define whatever suits you.
   * @returns {IUpdatedItems}          Will return the ids of the entities updated
   */
  update(items: IUpdatableItems, criteria?: ICriteria, options?: IStringAnyMap): IUpdatedItems
}

/**
 * Interface for implementing CRUD Update (Modify) Query.
 */
export interface ICrudUpdateQuery {
  /**
   * Generate string query for `ICrudUpdate.update` method.
   *
   * @param {IUpdatableItems} items    Can be one or more entities. If an entity does not exists when passed to the update
   *                                   method, it will be created.
   * @param {ICriteria}       criteria criteria to filter database data:
   *                                   - If `criteria` is given, method will then function as an 'update/patch' handler,
   *                                   not as a 'replace' one.
   *                                   - If `criteria` is given and `items` are multiple, function will apply all all
   *                                   items as patch.
   *                                   - If `criteria` is not given, and resource is not having an ID, method will try to
   *                                   create the resource.
   * @param {IOptions}        options  Not used. Define whatever suits you.
   * @returns {string}
   */
  update(items: IUpdatableItems, criteria?: ICriteria, options?: IStringAnyMap): string
}
