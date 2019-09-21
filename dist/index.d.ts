export interface IStringTMap<T> {
  [key: string]: T
}
export interface IStringAnyMap extends IStringTMap<any> {}
export type IOptions = IStringAnyMap
export declare type IModelStateID = string | number | null | undefined;
export interface IModelState extends IStringAnyMap {
	id?: IModelStateID;
}
export declare type IModelStateOneOrMore = IModelState | IModelState[];
export interface IModel {
	toObject(): IStringAnyMap;
	toJson(): string;
	toString(): string;
}
export declare type IModelOneOrMore = IModel | IModel[];
export declare type IModelType<T> = new (...args: any[]) => T;
export declare class Model implements IModel {
	static fromObject<T>(state: IModelState, klass: IModelType<T>): T;
	static fromJson<T>(state: string, klass: IModelType<T>): T;
	static fake(): Model;
	protected state: IModelState;
	constructor(state?: IModelState);
	readonly id: IModelStateID;
	toObject(): IStringAnyMap;
	toJson(): string;
	toString(): string;
}
/*******************************************************************************
 * Create
 ******************************************************************************/
/**
 * TODO: To be defined
 */
export declare type ICrudCreateCriteria = IStringAnyMap;
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
	create(items: IModelOneOrMore, criteria: ICrudCreateCriteria): IModelStateID[];
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
	create(items: IModelOneOrMore, criteria: ICrudCreateCriteria): string;
}
/*******************************************************************************
 * Read
 ******************************************************************************/
export declare type ICrudReadCriteria = Array<[string, any, any?]>;
/**
 *
 */
export interface ICrudReadOptions extends IOptions {
	__count?: boolean;
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
	read(criteria: ICrudReadCriteria, fields: string[], options: ICrudReadOptions): IModel[] | number;
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
	read(criteria: ICrudReadCriteria, fields: string[], options: ICrudReadOptions): string;
}
/*******************************************************************************
 * Update
 ******************************************************************************/
export declare type ICrudUpdateCriteria = ICrudReadCriteria;
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
	update(items: IModelOneOrMore, criteria: ICrudUpdateCriteria, options: IOptions): IModelStateID[];
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
	update(items: IModelOneOrMore, criteria: ICrudUpdateCriteria, options: IOptions): string;
}
/*******************************************************************************
 * Delete
 ******************************************************************************/
export declare type ICrudDeleteCriteria = ICrudReadCriteria;
/**
 *
 */
export interface ICrudDeleteOptions extends IOptions {
	__soft_delete?: boolean;
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
	delete(items: IModelOneOrMore | null, criteria: ICrudDeleteCriteria, options: ICrudDeleteOptions): void;
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
	delete(items: IModelOneOrMore | null, criteria: ICrudDeleteCriteria, options: ICrudDeleteOptions): string;
}
/*******************************************************************************
 * CRUD
 ******************************************************************************/
/**
 * Interface for implementing CRUD methods.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrud extends ICrudCreate, ICrudRead, ICrudUpdate, ICrudDelete {
}
/**
 * Interface for implementing CRUD query methods.
 */
export interface ICrudQuery extends ICrudCreateQuery, ICrudReadQuery, ICrudUpdateQuery, ICrudDeleteQuery {
}
export declare type IRestCreateCriteria = ICrudCreateCriteria;
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
	create(items: IModelOneOrMore, criteria: IRestCreateCriteria): IModelStateID[];
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
	create(items: IModelOneOrMore, criteria: IRestCreateCriteria): string;
}
export declare type IRestDeleteCriteria = ICrudDeleteCriteria;
export declare type IRestDeleteOptions = ICrudDeleteOptions;
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
	delete(items: IModelOneOrMore | null, criteria: IRestDeleteCriteria, options: IRestDeleteOptions): void;
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
	delete(items: IModelOneOrMore | null, criteria: IRestDeleteCriteria, options: IRestDeleteOptions): string;
}
export declare type IRestFetchCriteria = ICrudReadCriteria;
export declare type IRestFetchOptions = ICrudReadOptions;
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
	fetch(criteria: IRestFetchCriteria, fields: string[], options: IRestFetchOptions): IModel[] | number;
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
	fetch(criteria: IRestFetchCriteria, fields: string[], options: IRestFetchOptions): string;
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
	replace(items: IModelOneOrMore, options: IOptions): IModelStateID[];
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
	replace(items: IModelOneOrMore, options: IOptions): string;
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
	retrieve(id: IModelStateID, fields: string[], options: IOptions): IModel;
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
	retrieve(id: IModelStateID, fields: string[], options: IOptions): string;
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
	update(id: IModelStateID, items: IModelStateOneOrMore, options: IOptions): IModel;
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
	update(id: IModelStateID, items: IModelStateOneOrMore, options: IOptions): string;
}
/*******************************************************************************
 * REST
 ******************************************************************************/
export interface IRest extends IRestCreate, IRestDelete, IRestFetch, IRestReplace, IRestRetreive, IRestUpdate {
}
export interface IRestQuery extends IRestCreateQuery, IRestDeleteQuery, IRestFetchQuery, IRestReplaceQuery, IRestRetreiveQuery, IRestUpdateQuery {
}
