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

import {ICriteria, ICrudGenericDelete, IDeletableEntities, IDeletedEntities, IDeleteOptions} from '../crud'

/**
 * Generic Interface for implementing REST Delete method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export type IRestGeneriDelete = ICrudGenericDelete

/**
 * Interface for implementing REST Delete method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestDelete extends IRestGeneriDelete {
  /**
   * @param {IDeletableEntities} entities Can represent none, one or multiple entities:
   *                                      - if `items` is `null`, method will use the criteria `argument` instead
   * @param {ICriteria}          criteria Delete criteria:
   *                                      - if both `items` and `criteria` are `null`, method is to delete all
   *                                      entities  for a specfic type
   * @param {IDeleteOptions}     options  Options for how an item is deleted:
   *                                      - `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {IDeletedEntities}          Usually, delete() method should return void; however ocasional APIs could
   *                                      require returning the list of deleted elements
   */
  delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): IDeletedEntities
}

/**
 * Interface for implementing REST Delete Query.
 */
export interface IRestDeleteQuery extends IRestGeneriDelete {
  /**
   * @param {IDeletableEntities} entities Can represent none, one or multiple entities:
   *                                      - if `items` is `null`, method will use the criteria `argument` instead
   * @param {ICriteria}          criteria Delete criteria:
   *                                      - if both `items` and `criteria` are `null`, method is to delete all
   *                                      entities  for a specfic type
   * @param {IDeleteOptions}     options  Options for how an item is deleted:
   *                                      - `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {string}
   */
  delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): string
}
