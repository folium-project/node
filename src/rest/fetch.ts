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

import {ICriteria, IOptions} from '../types'
import {IModel} from '../model/model'
import {IReadCriteria as IFetchCriteria, IReadOptions as IFetchOptions} from '../crud/read'

export {IFetchCriteria, IFetchOptions}

export interface Fetch {
  fetch(criteria: IFetchCriteria, fields: string[], options: IFetchOptions): IModel[] | number
}

export interface FetchQuery {
  fetch(criteria: IFetchCriteria, fields: string[], options: IFetchOptions): string
}

// class Fetch(FetchBase):
//     """
//     Interface for implementing REST Fetch method.
//     :see https://en.wikipedia.org/wiki/Representational_state_transfer
//     """

//     @abc.abstractmethod
//     def fetch(self, criteria: list = [], fields: list = [], options: dict = {}):
//         """
//         If no field is passed, all resource fields should be presented to output.
//         Read resource(s) from the database according to a set of criteria and based on a set of fields to be returned

//         read([ [ 'id', '>', '10' ] ])

//         or

//         read(
//           [ [ 'id', '>', '10' ] ],
//           [ 'id', 'name', 'email' ]
//         )

//         or

//         read([], [], [ '__count' => True ])

//         :param criteria: list   (list of tuples) criteria to filter database data
//         :param fields: list     list of fields to read, can be empty (will read al fields)
//         :param options: dict    options used by method:
//                                 __count - if True, will return count of resources in stead of list
//         :return: list|int       array (or count) of resources matching the criteria (and having only the fields required)
//         """
//         pass

// class FetchQuery(FetchBase):
//     """
//     Interface for implementing REST Fetch query.
//     """

//     @abc.abstractmethod
//     def fetch(self, criteria: list = [], fields: list = [], options: dict = {}) -> str:
//         """
//         Generate string query for `Fetch.fetch` method.

//         :see Fetch.fetch
//         :param criteria: list   (list of tuples) criteria to filter database data
//         :param fields: list     list of fields to read, can be empty (will read al fields)
//         :param options: dict    options used by method:
//                                 __count - if True, will return count of resources in stead of list
//         :return: str
//         """
//         pass
