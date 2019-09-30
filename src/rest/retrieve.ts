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
 * Generic Interface for implementing REST Retreive (FetchOne) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericRetreive {
  /**
   * Retrieve entity from the database based on its ID and on a set of fields to be returned.
   *
   * retrieve(10) # will return entire entity
   *
   * or
   *
   * retrieve(
   *   10,
   *   [ 'id', 'name', 'email' ]
   * ) # will return only the fields mentioned from a entity
   *
   * @param {any}           code    Code/id of the entity to retreive
   * @param {string[]}      fields  Fields to obtain (can be empty - will return all fields)
   * @param {IStringAnyMap} options Not used. Define whatever suits you.
   * @returns {any}                 Should return null if no entity was found or, entity or data structure with entity
   *                                fields if entity was found
   */
  retrieve(code: any, fields?: string[], options?: IStringAnyMap): any
}

export type IRetreivedEntity = IEntity | IEntityState

/**
 * Interface for implementing REST Retreive (FetchOne) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestRetreive extends IRestGenericRetreive {
  /**
   * Retrieve entity from the database based on its ID and on a set of fields to be returned.
   *
   * retrieve(10) # will return entire entity
   *
   * or
   *
   * retrieve(
   *   10,
   *   [ 'id', 'name', 'email' ]
   * ) # will return only the fields mentioned from a entity
   *
   * @param {IEntityCode}        code    Code/id of the entity to retreive
   * @param {string[]}           fields  Fields to obtain (can be empty - will return all fields)
   * @param {IStringAnyMap}      options Not used. Define whatever suits you.
   * @returns {IRetreivedEntity}         Should return null if no entity was found or, entity or data structure with
   *                                     entity fields if entity was found
   */
  retrieve(code: IEntityCode, fields?: string[], options?: IStringAnyMap): IRetreivedEntity
}

/**
 * Interface for implementing REST Retrieve query.
 */
export interface IRestRetreiveQuery extends IRestGenericRetreive {
  /**
   * Retrieve entity from the database based on its ID and on a set of fields to be returned.
   *
   * retrieve(10) # will return entire entity
   *
   * or
   *
   * retrieve(
   *   10,
   *   [ 'id', 'name', 'email' ]
   * ) # will return only the fields mentioned from a entity
   *
   * @param {IEntityCode}   code    Code/id of the entity to retreive
   * @param {string[]}      fields  Fields to obtain (can be empty - will return all fields)
   * @param {IStringAnyMap} options Not used. Define whatever suits you.
   * @returns {string}
   */
  retrieve(code: IEntityCode, fields?: string[], options?: IStringAnyMap): string
}
