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

import {ICriteria, IOptions} from '../types'
import {IModel} from '../model/model'

export type IReadCriteria = Array<[string, any, any?]>

/**
 *
 */
export interface IReadOptions extends IOptions {
  __count?: boolean
}

/**
 * Interface for implementing CRUD Read (Retrieve) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface IRead {
  /**
   * If no field is passed, all resource fields should be presented to output.
   * Read resource(s) from the database according to a set of criteria and based on a set of fields to be returned
   *
   * read([ [ 'id', '>', '10' ] ])
   *
   * or
   *
   * read(
   *     [ [ 'id', '>', '10' ] ],
   *     [ 'id', 'name', 'email' ]
   * )
   *
   * or
   *
   * read([], [], { __count: true })
   *
   * @param {IReadCriteria} criteria  criteria to filter database data; Default: []
   * @param {string[]}      fields    list of fields to read, can be empty (will read al fields); Default: []
   * @param {IReadOptions}  options   options used by method:
   *                                  `__count` - if true, will return count of resources in stead of list
   * @returns {IModel[]|number}       array (or count) of resources matching the criteria (and having only the fields required)
   */
  read(criteria: IReadCriteria, fields: string[], options: IReadOptions): IModel[] | number
}

/**
 * Interface for implementing CRUD Read (Retrieve) query.
 */
export interface IReadQuery {
  /**
   * Generate string query for `IRead.read` method.
   * @see IRead.read
   *
   * @param {IReadCriteria} criteria (list of tuples) criteria to filter database data
   * @param {string[]}      fields   list of fields to read, can be empty (will read al fields)
   * @param {IReadOptions}  options  options used by method:
   *                                 `__count` - if true, will return count of resources in stead of list
   * @returns {string}
   */
  read(criteria: IReadCriteria, fields: string[], options: IReadOptions): string
}
