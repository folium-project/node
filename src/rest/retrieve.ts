import {IReadCriteria, IReadOptions} from './../crud/read'
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

import {IReadCriteria as IRetreiveCriteria, IReadOptions as IRetreiveOptions} from '../crud/read'
import {IModel, IModelStateID} from '../model/model'
import {IOptions} from '../types'

export {IRetreiveCriteria, IRetreiveOptions}

/**
 * Interface for implementing REST Retreive (FetchOne) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRetreive {
  /**
   * Retrieve resource from the database based on its ID and on a set of fields to be returned.
   *
   * retrieve(10) # will return entire resource
   *
   * or
   *
   * retrieve(
   *   10,
   *   [ 'id', 'name', 'email' ]
   * ) # will return only the fields mentioned from a resource
   *
   * @param {IModelStateID} id      ID of the resource to retreive
   * @param {string[]}      fields  fields to obtain (can be empty - will return all fields)
   * @param {IOptions}      options
   * @returns {IModel}              resource data
   */
  retrieve(id: IModelStateID, fields: string[], options: IOptions): IModel
}

/**
 * Interface for implementing REST Retrieve query.
 */
export interface IRetreiveQuery {
  /**
   * Generate string query for `Retrieve.retrieve` method.
   * @see Retrieve.retrieve
   *
   * @param {IModelStateID} id      ID of the resource to retreive
   * @param {string[]}      fields  fields to obtain (can be empty - will return all fields)
   * @param {IOptions}      options
   * @returns {string}
   */
  retrieve(id: IModelStateID, fields: string[], options: IOptions): string
}
