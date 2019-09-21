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

import {IModel, IModelOneOrMore, IModelStateID, IModelStateOneOrMore} from '../model'
import {IOptions} from '../types'

/*******************************************************************************
 * Create
 ******************************************************************************/

import {ICrudCreateCriteria as IRestCreateCriteria} from '../crud'

export {IRestCreateCriteria}

/**
 * Interface for implementing CRUD Create method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestCreate {
  /**
   * Create new resource(s).
   * Can receive a item or a set of items to create.
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
   * @param {IModelOneOrMore}     items     Can be a single element or an array of elements
   * @param {IRestCreateCriteria} criteria  Default: {}
   * @returns {IModelStateID[]}             Will return an array of ids for the models that have been saved in the
   *                                        database.
   */
  create(items: IModelOneOrMore, criteria: IRestCreateCriteria): IModelStateID[]
}

/**
 * Interface for implementing CRUD Create query.
 */
export interface IRestCreateQuery {
  /**
   * Generate string query for `ICrudCreate.create` method.
   * @see ICrudCreate.create
   *
   * @param {IModel|IModels[]}     items     can be a single element or an array of elements
   * @param {IRestCreateCriteria}  criteria  Default: {}
   * @returns {string}
   */
  create(items: IModelOneOrMore, criteria: IRestCreateCriteria): string
}

/*******************************************************************************
 * Delete
 ******************************************************************************/

import {ICrudDeleteCriteria as IRestDeleteCriteria, ICrudDeleteOptions as IRestDeleteOptions} from '../crud'

export {IRestDeleteCriteria, IRestDeleteOptions}

/**
 * Interface for implementing CRUD Delete (Destroy) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestDelete {
  /**
   * Delete resource(s) from the database.
   * When `items` is provided, the `criteria` argument will be ignored and will deleted only resources mentioned in
   * `items`.
   * When `items` is null, the `criteria` argument will take charge, giving the change to delete resource by criteria.
   * If `items` is null and `criteria` is [] all stored resource are to be deleted.
   *
   * delete({ "text": "I really have to iron" })
   *
   * or
   *
   * delete([
   *   { "text": "I really have to iron" },
   *   { "text": "Do laundry" }
   * ])
   *
   * or
   *
   * delete([], [
   *   ( 'id', '>', 10 )
   * ])
   *
   * or
   *
   * delete([], [
   *   ( 'id', '>', 10 )
   * ], { '__soft_delete': True })
   *
   * @param {IModelOneOrMore|null} items    can be a single element or an array of elements or null; Default: null
   * @param {IRestDeleteCriteria}  criteria implementing criteria by which to delete
   * @param {IRestDeleteOptions}   options  options for how an item is deleted:
   *                                        `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {void}
   */
  delete(items: IModelOneOrMore | null, criteria: IRestDeleteCriteria, options: IRestDeleteOptions): void
}

/**
 * Interface for implementing CRUD Delete (Destroy) query.
 */
export interface IRestDeleteQuery {
  /**
   * Generate string query for `ICrudDelete.delete` method.
   * @see ICrudDelete.delete
   *
   * @param {IModelOneOrMore|null} items    can be a single element or an array of elements or null; Default: null
   * @param {IRestDeleteCriteria}  criteria implementing criteria by which to delete
   * @param {IRestDeleteOptions}   options  options for how an item is deleted:
   *                                        `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {string}
   */
  delete(items: IModelOneOrMore | null, criteria: IRestDeleteCriteria, options: IRestDeleteOptions): string
}

/*******************************************************************************
 * Fetch
 ******************************************************************************/

import {ICrudReadCriteria as IRestFetchCriteria, ICrudReadOptions as IRestFetchOptions} from '../crud'

export {IRestFetchCriteria, IRestFetchOptions}

/**
 * Interface for implementing REST Fetch method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestFetch {
  /**
   * If no field is passed, all resource fields should be presented to output.
   * Read resource(s) from the database according to a set of criteria and based on a set of fields to be returned
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
   * @param {IRestFetchCriteria} criteria criteria to filter database data
   * @param {string[]}           fields   list of fields to read, can be empty (will read al fields)
   * @param {IRestFetchOptions}  options  options used by method:
   *                                      `__count` - if True, will return count of resources in stead of list
   * @returns {IModel[]|number}           array (or count) of resources matching the criteria (and having only the
   *                                      fields required)
   */
  fetch(criteria: IRestFetchCriteria, fields: string[], options: IRestFetchOptions): IModel[] | number
}

/**
 * Interface for implementing REST Fetch query.
 */
export interface IRestFetchQuery {
  /**
   * Generate string query for `Fetch.fetch` method.
   * @see Fetch.fetch
   *
   * @param {IRestFetchCriteria} criteria criteria to filter database data
   * @param {string[]}           fields   list of fields to read, can be empty (will read al fields)
   * @param {IRestFetchOptions}  options  options used by method:
   *                                      `__count` - if True, will return count of resources in stead of list
   * @returns {string}
   */
  fetch(criteria: IRestFetchCriteria, fields: string[], options: IRestFetchOptions): string
}

/*******************************************************************************
 * Replace
 ******************************************************************************/

/**
 * Interface for implementing REST Replace method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestReplace {
  /**
   * Replace a resource or set of resources in the database.
   * If a resource does not exists when passed to the update method, it will be created.
   *
   * replace([
   *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
   *   { "text": "Do laundry" } # this item will be created
   * ])
   *
   * @param {IModelOneOrMore} items can be a single element or an array of elements
   * @param {IOptions} options
   * @returns {IModelStateID}       will return the ids of the elements updated
   */
  replace(items: IModelOneOrMore, options: IOptions): IModelStateID[]
}

/**
 * Interface for implementing REST Replace query.
 */
export interface IRestReplaceQuery {
  /**
   * Generate string query for `Replace.replace` method.
   * @see Replace.replace
   *
   * @param {IModelOneOrMore} items can be a single element or an array of elements
   * @param {IOptions} options
   * @returns {string}
   */
  replace(items: IModelOneOrMore, options: IOptions): string
}

/*******************************************************************************
 * Retreive
 ******************************************************************************/

/**
 * Interface for implementing REST Retreive (FetchOne) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestRetreive {
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
export interface IRestRetreiveQuery {
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

/*******************************************************************************
 * Update
 ******************************************************************************/

/**
 * Interface for implementing REST Update (Patch) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestUpdate {
  /**
   * Update/patch a resource in the database.
   * If multiple items are given, all patches will be applied in the given order.
   *
   * update(id, { "text": "I really have to iron" })
   *
   * @param {IModelStateID}        id      id of item to be patched
   * @param {IModelStateOneOrMore} items   can be a single element or an array of elements
   * @param {IOptions}             options
   * @returns {IModel}                     resource data
   */
  update(id: IModelStateID, items: IModelStateOneOrMore, options: IOptions): IModel
}

/**
 * Interface for implementing REST Update query.
 */
export interface IRestUpdateQuery {
  /**
   * Generate string query for `Update.update` method.
   * @see Update.update
   *
   * @param {IModelStateID}        id      id of item to be patched
   * @param {IModelStateOneOrMore} items   can be a single element or an array of elements
   * @param {IOptions}             options
   * @returns {string}
   */
  update(id: IModelStateID, items: IModelStateOneOrMore, options: IOptions): string
}

/*******************************************************************************
 * REST
 ******************************************************************************/

export interface IRest extends IRestCreate, IRestDelete, IRestFetch, IRestReplace, IRestRetreive, IRestUpdate {}
