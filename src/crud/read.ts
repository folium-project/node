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

import {IEntity, IEntityState} from '../entity'
import {IStringAnyMap} from '../types.d'
import {ICriteria} from './types'

export type IReadEntities = IEntity[] | IEntityState[] | number

/**
 *
 */
export interface IReadOptions extends IStringAnyMap {
  __count?: boolean
}

/**
 * Generic Interface for implementing CRUD Read (Retrieve) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudGenericRead {
  /**
   * Read entities from the database according to a set of criteria return data bases on the required set of fields.
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
   * @param {ICriteria}     criteria Criteria to filter database data; Default: []
   * @param {string[]}      fields   List of fields to read, can be empty (will read al fields); Default: []
   * @param {IReadOptions}  options  Options used by method:
   *                                 - `__count` - if true, will return count of entities in stead of list
   * @returns {any}                  Array (or count) of entities matching the criteria (and having only the fields
   *                                 required)
   */
  read(criteria?: ICriteria, fields?: string[], options?: IReadOptions): any
}

/**
 * Interface for implementing CRUD Read (Retrieve) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudRead extends ICrudGenericRead {
  /**
   * @see ICrudGenericRead.read
   *
   * @param {ICriteria}     criteria Criteria to filter database data; Default: []
   * @param {string[]}      fields   List of fields to read, can be empty (will read al fields); Default: []
   * @param {IReadOptions}  options  Options used by method:
   *                                 - `__count` - if true, will return count of entities in stead of list
   * @returns {IReadEntities}        Array (or count) of entities matching the criteria (and having only the fields
   *                                 required)
   */
  read(criteria?: ICriteria, fields?: string[], options?: IReadOptions): IReadEntities
}

/**
 * Interface for implementing CRUD Read (Retrieve) query.
 */
export interface ICrudReadQuery {
  /**
   * Generate string query for `ICrudRead.read` method.
   *
   * @param {ICriteria}     criteria Criteria to filter database data; Default: []
   * @param {string[]}      fields   List of fields to read, can be empty (will read al fields); Default: []
   * @param {IReadOptions}  options  Options used by method:
   *                                 - `__count` - if true, will return count of entities in stead of list
   * @returns {string}
   */
  read(criteria?: ICriteria, fields?: string[], options?: IReadOptions): string
}
