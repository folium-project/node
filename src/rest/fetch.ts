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

import {ICriteria, IReadOptions, IReadEntities} from '../crud'

/**
 * Generic Interface for implementing REST Fetch method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericFetch {
  /**
   * Read entities from the database according to a set of criteria return data bases on the required set of fields.
   *
   * read([ [ 'id', '>', '10' ] ])
   *
   * or
   *
   * read(
   *   [ [ 'id', '>', '10' ] ],
   *   [ 'id', 'name', 'email' ]
   * )
   *
   * or
   *
   * read([], [], [ '__count' => True ])
   *
   * @param {ICriteria}     criteria Criteria to filter database data; Default: []
   * @param {string[]}      fields   List of fields to read, can be empty (will read al fields); Default: []
   * @param {IReadOptions}  options  Options used by method:
   *                                 - `__count` - if true, will return count of entities in stead of list
   * @returns {any}                  Array (or count) of entities matching the criteria (and having only the fields
   *                                 required)
   */
  fetch(criteria?: ICriteria, fields?: string[], options?: IReadOptions): any
}

/**
 * Interface for implementing REST Fetch method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestFetch extends IRestGenericFetch {
  /**
   * @param {ICriteria}     criteria Criteria to filter database data; Default: []
   * @param {string[]}      fields   List of fields to read, can be empty (will read al fields); Default: []
   * @param {IReadOptions}  options  Options used by method:
   *                                 - `__count` - if true, will return count of entities in stead of list
   * @returns {IReadEntities}        Array (or count) of entities matching the criteria (and having only the fields
   *                                 required)
   */
  fetch(criteria?: ICriteria, fields?: string[], options?: IReadOptions): IReadEntities
}

/**
 * Interface for implementing REST Fetch query.
 */
export interface IRestFetchQuery extends IRestGenericFetch {
  /**
   * Generate string query for `IRestFetch.fetch` method.
   *
   * @param {ICriteria}     criteria Criteria to filter database data; Default: []
   * @param {string[]}      fields   List of fields to read, can be empty (will read al fields); Default: []
   * @param {IReadOptions}  options  Options used by method:
   *                                 - `__count` - if true, will return count of entities in stead of list
   * @returns {string}
   */
  fetch(criteria?: ICriteria, fields?: string[], options?: IReadOptions): string
}
