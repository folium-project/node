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

import {ICrudGenericCreate, ICreatableEntities, ICreatedEntities, ICriteria} from '../crud'

/**
 * Generic Interface for implementing REST Create method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericreate extends ICrudGenericCreate {}

/**
 * Interface for implementing REST Create method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestCreate extends IRestGenericreate {
  /**
   * @param {ICreatableEntities} entities Can either represent entities or data matching the entities structure.
   * @param {ICriteria}          criteria Not used. Define whatever suits you.
   * @returns {ICreatedEntities}          Can return either a list of ids for the created entities, either the list of
   *                                      the created entities themselves.
   */
  create(entities: ICreatableEntities, criteria?: ICriteria): ICreatedEntities
}

/**
 * Interface for implementing REST Create Query.
 */
export interface IRestCreateQuery extends IRestGenericreate {
  /**
   * @param {ICreatableEntities} entities Can either represent entities or data matching the entities structure.
   * @param {ICriteria}          criteria Not used. Define whatever suits you.
   * @returns {string}
   */
  create(entities: ICreatableEntities, criteria?: ICriteria): string
}
