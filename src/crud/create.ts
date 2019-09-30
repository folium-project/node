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
import {ICriteria} from './types.d'

/**
 * Generic Interface for implementing CRUD Create method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudGenericCreate {
  /**
   * Create new entity(ies).
   *
   * create({ "text": "I really have to iron" })
   *
   * or
   *
   * create([
   *   { "text": "I really have to iron" },
   *   { "text": "Do laundry" }
   * ])
   *
   * @param {any} entities Can either represent entities or data matching the entities structure.
   * @param {any} criteria Not used. Define whatever suits you.
   * @returns              Can return either a list of ids for the created entities, either the list of the created
   *                       entities themselves.
   */
  create(entities: any, criteria?: ICriteria): any
}

export type ICreatableEntities = IEntityState | IEntityState[] | IEntity | IEntity[]
export type ICreatedEntities = IEntityCode | IEntityCode[] | IEntity | IEntity[]

/**
 * Interface for implementing CRUD Create method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudCreate extends ICrudGenericCreate {
  /**
   * @param {ICreatableEntities} entities Can either represent entities or data matching the entities structure.
   * @param {ICriteria}          criteria Not used. Define whatever suits you.
   * @returns {ICreatedEntities}          Can return either a list of ids for the created entities, either the list of
   *                                      the created entities themselves.
   */
  create(entities: ICreatableEntities, criteria?: ICriteria): ICreatedEntities
}

/**
 * Interface for implementing CRUD Create query.
 */
export interface ICrudCreateQuery extends ICrudGenericCreate {
  /**
   * Generate string query for `ICrudCreate.create` method.
   *
   * @param {ICreatableEntities} entities Can either represent entities or data matching the entities structure.
   * @param {ICriteria}          criteria Not used. Define whatever suits you.
   * @returns {string}
   */
  create(entities: ICreatableEntities, criteria?: ICriteria): string
}
