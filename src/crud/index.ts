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

import {IModel, IModelOneOrMore, IModelStateID} from '../model'
import {IOptions, IStringAnyMap} from '../types'

/*******************************************************************************
 * Create
 ******************************************************************************/

/**
 * TODO: To be defined
 */
export type ICrudCreateCriteria = IStringAnyMap

/**
 * Interface for implementing CRUD Create method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface ICrudCreate {
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
   * @param {IModelStateOneOrMore}     items     Can be a single element or an array of elements
   * @param {ICrudCreateCriteria} criteria  Default: {}
   * @returns {IModelStateID[]}             Will return an array of ids for the models that have been saved in the
   *                                        database.
   */
  create(items: IModelOneOrMore, criteria: ICrudCreateCriteria): IModelStateID[]
}

/**
 * Interface for implementing CRUD Create query.
 */
export interface ICrudCreateQuery {
  /**
   * Generate string query for `ICrudCreate.create` method.
   * @see ICrudCreate.create
   *
   * @param {IModel|IModels[]}     items     can be a single element or an array of elements
   * @param {ICrudCreateCriteria}  criteria  Default: {}
   * @returns {string}
   */
  create(items: IModelOneOrMore, criteria: ICrudCreateCriteria): string
}

/*******************************************************************************
 * Read
 ******************************************************************************/

export type ICrudReadCriteria = Array<[string, any, any?]>

/**
 *
 */
export interface ICrudReadOptions extends IOptions {
  __count?: boolean
}

/**
 * Interface for implementing CRUD Read (Retrieve) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudRead {
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
   * @param {ICrudReadCriteria} criteria criteria to filter database data; Default: []
   * @param {string[]}          fields   list of fields to read, can be empty (will read al fields); Default: []
   * @param {ICrudReadOptions}  options  options used by method:
   *                                     `__count` - if true, will return count of resources in stead of list
   * @returns {IModel[]|number}          array (or count) of resources matching the criteria (and having only the fields
   *                                     required)
   */
  read(criteria: ICrudReadCriteria, fields: string[], options: ICrudReadOptions): IModel[] | number
}

/**
 * Interface for implementing CRUD Read (Retrieve) query.
 */
export interface ICrudReadQuery {
  /**
   * Generate string query for `ICrudRead.read` method.
   * @see ICrudRead.read
   *
   * @param {ICrudReadCriteria} criteria criteria to filter database data; Default: []
   * @param {string[]}          fields   list of fields to read, can be empty (will read al fields); Default: []
   * @param {ICrudReadOptions}  options  options used by method:
   *                                     `__count` - if true, will return count of resources in stead of list
   * @returns {string}
   */
  read(criteria: ICrudReadCriteria, fields: string[], options: ICrudReadOptions): string
}

/*******************************************************************************
 * Update
 ******************************************************************************/

export type ICrudUpdateCriteria = ICrudReadCriteria

/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudUpdate {
  /**
   * Update/replace a resource or set of resources in the database.
   * If a resource does not exists when passed to the update method, it will be created.
   *
   * If `criteria` is given, method will then function as an 'update/patch' handler, not as a 'replace' one.
   * If `criteria` is given and `items` are multiple, function will apply all all items as patch.
   * If `criteria` is not give, and resource is not having an ID, method will try to create the resource.
   *
   * update({ "text": "I really have to iron" }, [ ( 'id', 10 ) ]) # behave as patch (update)
   *
   * or
   *
   * update([
   *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
   *   { "text": "Do laundry" ] # this item will be created
   * ])
   *
   * @param {IModelStateOneOrMore} items    can be a single element or an array of elements
   * @param {ICrudUpdateCriteria}  criteria criteria to filter database data
   * @param {IOptions}             options
   * @returns {IModelStateID[]}             will return the ids of the elements updated
   */
  update(items: IModelOneOrMore, criteria: ICrudUpdateCriteria, options: IOptions): IModelStateID[]
}

/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudUpdateQuery {
  /**
   * Generate string query for `Update.update` method.
   * @see Update.update
   *
   * @param {IModelStateOneOrMore} items    can be a single element or an array of elements
   * @param {ICrudUpdateCriteria}  criteria criteria to filter database data
   * @param {IOptions}             options
   * @returns {string}
   */
  update(items: IModelOneOrMore, criteria: ICrudUpdateCriteria, options: IOptions): string
}

/*******************************************************************************
 * Delete
 ******************************************************************************/

export type ICrudDeleteCriteria = ICrudReadCriteria

/**
 *
 */
export interface ICrudDeleteOptions extends IOptions {
  __soft_delete?: boolean
}

/**
 * Interface for implementing CRUD Delete (Destroy) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface ICrudDelete {
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
   * @param {IModelStateOneOrMore|null} items    can be a single element or an array of elements or null; Default: null
   * @param {ICrudDeleteCriteria}       criteria implementing criteria by which to delete
   * @param {ICrudDeleteOptions}        options  options for how an item is deleted:
   *                                             `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {void}
   */
  delete(items: IModelOneOrMore | null, criteria: ICrudDeleteCriteria, options: ICrudDeleteOptions): void
}

/**
 * Interface for implementing CRUD Delete (Destroy) query.
 */
export interface ICrudDeleteQuery {
  /**
   * Generate string query for `ICrudDelete.delete` method.
   * @see ICrudDelete.delete
   *
   * @param {IModelStateOneOrMore|null} items    can be a single element or an array of elements or null; Default: null
   * @param {ICrudDeleteCriteria}       criteria implementing criteria by which to delete
   * @param {ICrudDeleteOptions}        options  options for how an item is deleted:
   *                                             `__soft_delete`: mention whether the items are soft deleted or not
   * @returns {string}
   */
  delete(items: IModelOneOrMore | null, criteria: ICrudDeleteCriteria, options: ICrudDeleteOptions): string
}

/*******************************************************************************
 * CRUD
 ******************************************************************************/

/**
 * Interface for implementing CRUD methods.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrud extends ICrudCreate, ICrudRead, ICrudUpdate, ICrudDelete {}

/**
 * Interface for implementing CRUD query methods.
 */
export interface ICrudQuery extends ICrudCreateQuery, ICrudReadQuery, ICrudUpdateQuery, ICrudDeleteQuery {}
