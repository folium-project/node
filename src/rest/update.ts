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

import {IEntity, IEntityCode, IEntityState} from '../entity'
import {IStringAnyMap} from '../types'

/**
 * Generic Interface for implementing REST Update (Patch) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericUpdate {
  /**
   * Update/patch a resource in the database.
   * If multiple items are given, all patches will be applied in the given order.
   *
   * update(id, { "text": "I really have to iron" })
   *
   * @param {any}      code     Code/id of the entity to be patched
   * @param {any}      entities Can be a one or more data structures matching entity's structure
   * @param {IOptions} options  Not used. Define whatever suits you.
   * @returns {any}             Can return either a list of ids for the updated/created entities, either the
   *                            list of the created entities themselves.
   */
  update(code: any, entities: any, options?: IStringAnyMap): any
}

export type IUpdateableEntities = IEntityState | IEntityState[]
export type IUpdatedEntities = IEntity | IEntity[] | IEntityCode | IEntityCode[]

/**
 * Interface for implementing REST Update (Patch) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestUpdate extends IRestGenericUpdate {
  /**
   * Update/patch a resource in the database.
   * If multiple items are given, all patches will be applied in the given order.
   *
   * update(id, { "text": "I really have to iron" })
   *
   * @param {IEntityCode}       code     Code/id of the entity to be patched
   * @param {IUpdateableEntities} entities Can be a one or more data structures matching entity's structure
   * @param {IOptions}            options  Not used. Define whatever suits you.
   * @returns {IUpdatedEntities}           Can return either a list of ids for the updated/created entities, either the
   *                                       list of the created entities themselves.
   */
  update(code: IEntityCode, entities: IUpdateableEntities, options?: IStringAnyMap): IUpdatedEntities
}

/**
 * Interface for implementing REST Update query.
 */
export interface IRestUpdateQuery extends IRestGenericUpdate {
  /**
   * Generate string query for `Update.update` method.
   *
   * update(id, { "text": "I really have to iron" })
   *
   * @param {IEntityCode}       code     Code/id of the entity to be patched
   * @param {IUpdateableEntities} entities Can be a one or more data structures matching entity's structure
   * @param {IOptions}            options  Not used. Define whatever suits you.
   * @returns {string}
   */
  update(code: IEntityCode, entities: IUpdateableEntities, options?: IStringAnyMap): string
}
