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
import {ICriteria} from '../crud'
import {IStringAnyMap} from '../types.d'

/**
 * Generic Interface for implementing REST Replace method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericReplace {
  /**
   * Replace an entity or set of entitys in the database.
   *
   * replace([
   *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
   *   { "text": "Do laundry" } # this item will be created
   * ])
   *
   * @param {any}      entities Can be one or more entities. If an entity does not exists when passed to the update
   *                            method, it will be created.
   * @param {IOptions} options  Not used. Define whatever suits you.
   * @returns {any}             Can return either a list of ids for the updated/created entities, either the
   *                            list of the created entities themselves.
   */
  replace(entities: any, options?: IStringAnyMap): any
}

export type IReplaceableItems = IEntityState | IEntityState[] | IEntity | IEntity[]
export type IReplacedItems = IEntityCode | IEntityCode[]

/**
 * Generic Interface for implementing REST Replace method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestReplace extends IRestGenericReplace {
  /**
   * Replace an entity or set of entitys in the database.
   *
   * replace([
   *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
   *   { "text": "Do laundry" } # this item will be created
   * ])
   *
   * @param {IReplaceableItems} entities Can be one or more entities. If an entity does not exists when passed to
   *                                     the update method, it will be created.
   * @param {IOptions}          options  Not used. Define whatever suits you.
   * @returns {IReplacedItems}           Can return either a list of ids for the updated/created entities, either the
   *                                     list of the created entities themselves.
   */
  replace(entities: IReplaceableItems, options?: IStringAnyMap): IReplacedItems
}

/**
 * Interface for implementing REST Replace query.
 */
export interface IRestReplaceQuery extends IRestGenericReplace {
  /**
   * Generate string query for `IRestReplace.replace` method.
   *
   * @param {IReplaceableItems} entities Can be one or more entities. If an entity does not exists when passed to
   *                                     the update method, it will be created.
   * @param {IOptions}          options  Not used. Define whatever suits you.
   * @returns {string}
   */
  replace(entities: IReplaceableItems, options?: IStringAnyMap): string
}
