export interface IStringTMap<T> {
  [key: string]: T
}
export interface IStringAnyMap extends IStringTMap<any> {}
export declare type IEntityCode = string | number;
export interface IEntityState extends IStringAnyMap {
	code?: IEntityCode;
}
export interface IEntity {
	toJson(): string;
	toObject(): IStringAnyMap;
}
export declare abstract class Entity implements IEntity {
	protected state?: IEntityState;
	constructor(state: IEntityState);
	toJson(): string;
	toObject(): IStringAnyMap;
	readonly code: IEntityCode;
	/**
	 * We suggest reading {@link https://www.callicoder.com/distributed-unique-id-sequence-number-generator/ |
	 * Generating unique IDs in a distributed environment at high scale.} article.
	 */
	protected abstract codeGenerate(): IEntityCode;
}
/**
 * Criteria type.
 * Can be formed of a 2 or 3 token touple, where:
 * - 1st is always the property to compare
 * - 2nd can be a comparator or a value
 * - 3rd can be a value
 *
 * If 3rd value is not mentioned, the comparator can be treated as 'equals' or
 * 'matches' and the 2nd value becomes the 'compared to' value.
 *
 * i.e.
 *
 * ['id', 10]
 *
 * ['id', '>', 10]
 *
 * ['name', 'like', 'test']
 *
 * Comparators and their verbs should be defined within the developed API and
 * should match the capabilities of the storing tool used by the API.
 */
export type ICriteria = [string, any, any?]
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
	create(entities: any, criteria?: ICriteria): any;
}
export declare type ICreatableEntities = IEntityState | IEntityState[] | IEntity | IEntity[];
export declare type ICreatedEntities = IEntityCode | IEntityCode[] | IEntity | IEntity[];
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
	create(entities: ICreatableEntities, criteria?: ICriteria): ICreatedEntities;
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
	create(entities: ICreatableEntities, criteria?: ICriteria): string;
}
export declare type IDeletableEntities = IEntity | IEntity[] | null;
export declare type IDeletedEntities = IEntity[] | void;
/**
 *
 */
export interface IDeleteOptions extends IStringAnyMap {
	__soft_delete?: boolean;
}
/**
 * Generic Interface for implementing CRUD Delete (Destroy) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudGenericDelete {
	/**
	 * Delete resource(s) from the database.
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
	 * @param {any}            entities Can represent none, one or multiple entities:
	 *                                  - if `items` is `null`, method will use the criteria `argument` instead
	 * @param {ICriteria}      criteria Delete criteria:
	 *                                  - if both `items` and `criteria` are `null`, method is to delete all entities
	 *                                  for a specfic type
	 * @param {IDeleteOptions} options  Options for how an item is deleted:
	 *                                  - `__soft_delete`: mention whether the items are soft deleted or not
	 * @returns {any}                   Usually, delete() method should return void; however ocasional APIs could require
	 *                                  returning the list of deleted entities data
	 */
	delete(entities?: any, criteria?: ICriteria, options?: IDeleteOptions): any;
}
/**
 * Interface for implementing CRUD Delete (Destroy) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudDelete extends ICrudGenericDelete {
	/**
	 * @param {IDeletableEntities} entities Can represent none, one or multiple entities:
	 *                                      - if `items` is `null`, method will use the criteria `argument` instead
	 * @param {ICriteria}          criteria Delete criteria:
	 *                                      - if both `items` and `criteria` are `null`, method is to delete all entities
	 *                                      for a specfic type
	 * @param {IDeleteOptions}     options  Options for how an item is deleted:
	 *                                      - `__soft_delete`: mention whether the items are soft deleted or not
	 * @returns {IDeletedEntities}          Usually, delete() method should return void; however ocasional APIs could
	 *                                      require returning the list of deleted elements
	 */
	delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): IDeletedEntities;
}
/**
 * Interface for implementing CRUD Delete (Destroy) query.
 */
export interface ICrudDeleteQuery {
	/**
	 * @param {IDeletableEntities} entities Can represent none, one or multiple entities:
	 *                                      - if `items` is `null`, method will use the criteria `argument` instead
	 * @param {ICriteria}          criteria Delete criteria:
	 *                                      - if both `items` and `criteria` are `null`, method is to delete all entities
	 *                                      for a specfic type
	 * @param {IDeleteOptions}     options  Options for how an item is deleted:
	 *                                      - `__soft_delete`: mention whether the items are soft deleted or not
	 * @returns {string}
	 */
	delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): string;
}
export declare type IReadEntities = IEntity[] | IEntityState[] | number;
/**
 *
 */
export interface IReadOptions extends IStringAnyMap {
	__count?: boolean;
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
	read(criteria?: ICriteria, fields?: string[], options?: IReadOptions): any;
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
	read(criteria?: ICriteria, fields?: string[], options?: IReadOptions): IReadEntities;
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
	read(criteria?: ICriteria, fields?: string[], options?: IReadOptions): string;
}
/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudGenericUpdate {
	/**
	 * Update/replace a resource or set of resources in the database.
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
	 * @param {any}           items    Can be one or more entities. If an entity does not exists when passed to the update
	 *                                 method, it will be created.
	 * @param {ICriteria}     criteria Criteria to update/patch database data:
	 *                                 - If `criteria` is given, method will then function as an 'update/patch' handler,
	 *                                 not as a 'replace' one.
	 *                                 - If `criteria` is given and `items` are multiple, function will apply all all
	 *                                 items as patch.
	 *                                 - If `criteria` is not given, and resource is not having an ID, method will try to
	 *                                 create the resource.
	 * @param {IStringAnyMap} options  Not used. Define whatever suits you.
	 * @returns {any}                  Can return either a list of ids for the updated/created entities, either the
	 *                                 list of the created entities themselves.
	 */
	update(items: any, criteria?: ICriteria, options?: IStringAnyMap): any;
}
export declare type IUpdatableItems = IEntityState | IEntityState[] | IEntity | IEntity[];
export declare type IUpdatedItems = IEntityCode | IEntityCode[];
/**
 * Interface for implementing CRUD Update (Modify) method.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrudUpdate extends ICrudGenericUpdate {
	/**
	 * @param {IUpdatableItems} items    Can be one or more entities. If an entity does not exists when passed to the
	 *                                   update method, it will be created.
	 * @param {ICriteria}       criteria criteria to filter database data:
	 *                                   - If `criteria` is given, method will then function as an 'update/patch' handler,
	 *                                   not as a 'replace' one.
	 *                                   - If `criteria` is given and `items` are multiple, function will apply all all
	 *                                   items as patch.
	 *                                   - If `criteria` is not given, and resource is not having an ID, method will try
	 *                                   to create the resource.
	 * @param {IOptions}        options  Not used. Define whatever suits you.
	 * @returns {IUpdatedItems}          Will return the ids of the entities updated
	 */
	update(items: IUpdatableItems, criteria?: ICriteria, options?: IStringAnyMap): IUpdatedItems;
}
/**
 * Interface for implementing CRUD Update (Modify) Query.
 */
export interface ICrudUpdateQuery {
	/**
	 * Generate string query for `ICrudUpdate.update` method.
	 *
	 * @param {IUpdatableItems} items    Can be one or more entities. If an entity does not exists when passed to the
	 *                                   update method, it will be created.
	 * @param {ICriteria}       criteria criteria to filter database data:
	 *                                   - If `criteria` is given, method will then function as an 'update/patch' handler,
	 *                                   not as a 'replace' one.
	 *                                   - If `criteria` is given and `items` are multiple, function will apply all all
	 *                                   items as patch.
	 *                                   - If `criteria` is not given, and resource is not having an ID, method will try
	 *                                   to create the resource.
	 * @param {IOptions}        options  Not used. Define whatever suits you.
	 * @returns {string}
	 */
	update(items: IUpdatableItems, criteria?: ICriteria, options?: IStringAnyMap): string;
}
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
/**
 * Generic Interface for implementing REST Create method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export declare type IRestGenericreate = ICrudGenericCreate;
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
	create(entities: ICreatableEntities, criteria?: ICriteria): ICreatedEntities;
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
	create(entities: ICreatableEntities, criteria?: ICriteria): string;
}
/**
 * Generic Interface for implementing REST Delete method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export declare type IRestGeneriDelete = ICrudGenericDelete;
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
	delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): IDeletedEntities;
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
	delete(entities?: IDeletableEntities, criteria?: ICriteria, options?: IDeleteOptions): string;
}
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
	fetch(criteria?: ICriteria, fields?: string[], options?: IReadOptions): any;
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
	fetch(criteria?: ICriteria, fields?: string[], options?: IReadOptions): IReadEntities;
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
	fetch(criteria?: ICriteria, fields?: string[], options?: IReadOptions): string;
}
/**
 * Generic Interface for implementing REST Replace method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericReplace {
	/**
	 * Replace an entity or set of entitys in the database.
	 *
	 * replace([
	 *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
	 *   { "text": "Do laundry" } # this item will be created
	 * ])
	 *
	 * @param {any}      entities Can be one or more entities. If an entity does not exists when passed to the update
	 *                            method, it will be created.
	 * @param {IOptions} options  Not used. Define whatever suits you.
	 * @returns {any}             Can return either a list of ids for the updated/created entities, either the
	 *                            list of the created entities themselves.
	 */
	replace(entities: any, options?: IStringAnyMap): any;
}
export declare type IReplaceableItems = IEntityState | IEntityState[] | IEntity | IEntity[];
export declare type IReplacedItems = IEntityCode | IEntityCode[];
/**
 * Generic Interface for implementing REST Replace method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestReplace extends IRestGenericReplace {
	/**
	 * Replace an entity or set of entitys in the database.
	 *
	 * replace([
	 *   { "text": "I really have to iron", "id": 10 }, # this item will be replaced
	 *   { "text": "Do laundry" } # this item will be created
	 * ])
	 *
	 * @param {IReplaceableItems} entities Can be one or more entities. If an entity does not exists when passed to
	 *                                     the update method, it will be created.
	 * @param {IOptions}          options  Not used. Define whatever suits you.
	 * @returns {IReplacedItems}           Can return either a list of ids for the updated/created entities, either the
	 *                                     list of the created entities themselves.
	 */
	replace(entities: IReplaceableItems, options?: IStringAnyMap): IReplacedItems;
}
/**
 * Interface for implementing REST Replace query.
 */
export interface IRestReplaceQuery extends IRestGenericReplace {
	/**
	 * Generate string query for `IRestReplace.replace` method.
	 *
	 * @param {IReplaceableItems} entities Can be one or more entities. If an entity does not exists when passed to
	 *                                     the update method, it will be created.
	 * @param {IOptions}          options  Not used. Define whatever suits you.
	 * @returns {string}
	 */
	replace(entities: IReplaceableItems, options?: IStringAnyMap): string;
}
/**
 * Generic Interface for implementing REST Retreive (FetchOne) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericRetreive {
	/**
	 * Retrieve entity from the database based on its ID and on a set of fields to be returned.
	 *
	 * retrieve(10) # will return entire entity
	 *
	 * or
	 *
	 * retrieve(
	 *   10,
	 *   [ 'id', 'name', 'email' ]
	 * ) # will return only the fields mentioned from a entity
	 *
	 * @param {any}           code    Code/id of the entity to retreive
	 * @param {string[]}      fields  Fields to obtain (can be empty - will return all fields)
	 * @param {IStringAnyMap} options Not used. Define whatever suits you.
	 * @returns {any}                 Should return null if no entity was found or, entity or data structure with entity
	 *                                fields if entity was found
	 */
	retrieve(code: any, fields?: string[], options?: IStringAnyMap): any;
}
export declare type IRetreivedEntity = IEntity | IEntityState;
/**
 * Interface for implementing REST Retreive (FetchOne) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestRetreive extends IRestGenericRetreive {
	/**
	 * Retrieve entity from the database based on its ID and on a set of fields to be returned.
	 *
	 * retrieve(10) # will return entire entity
	 *
	 * or
	 *
	 * retrieve(
	 *   10,
	 *   [ 'id', 'name', 'email' ]
	 * ) # will return only the fields mentioned from a entity
	 *
	 * @param {IEntityCode}        code    Code/id of the entity to retreive
	 * @param {string[]}           fields  Fields to obtain (can be empty - will return all fields)
	 * @param {IStringAnyMap}      options Not used. Define whatever suits you.
	 * @returns {IRetreivedEntity}         Should return null if no entity was found or, entity or data structure with
	 *                                     entity fields if entity was found
	 */
	retrieve(code: IEntityCode, fields?: string[], options?: IStringAnyMap): IRetreivedEntity;
}
/**
 * Interface for implementing REST Retrieve query.
 */
export interface IRestRetreiveQuery extends IRestGenericRetreive {
	/**
	 * Retrieve entity from the database based on its ID and on a set of fields to be returned.
	 *
	 * retrieve(10) # will return entire entity
	 *
	 * or
	 *
	 * retrieve(
	 *   10,
	 *   [ 'id', 'name', 'email' ]
	 * ) # will return only the fields mentioned from a entity
	 *
	 * @param {IEntityCode}   code    Code/id of the entity to retreive
	 * @param {string[]}      fields  Fields to obtain (can be empty - will return all fields)
	 * @param {IStringAnyMap} options Not used. Define whatever suits you.
	 * @returns {string}
	 */
	retrieve(code: IEntityCode, fields?: string[], options?: IStringAnyMap): string;
}
/**
 * Generic Interface for implementing REST Update (Patch) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestGenericUpdate {
	/**
	 * Update/patch a resource in the database.
	 * If multiple items are given, all patches will be applied in the given order.
	 *
	 * update(id, { "text": "I really have to iron" })
	 *
	 * @param {any}      code     Code/id of the entity to be patched
	 * @param {any}      entities Can be a one or more data structures matching entity's structure
	 * @param {IOptions} options  Not used. Define whatever suits you.
	 * @returns {any}             Can return either a list of ids for the updated/created entities, either the
	 *                            list of the created entities themselves.
	 */
	update(code: any, entities: any, options?: IStringAnyMap): any;
}
export declare type IUpdateableEntities = IEntityState | IEntityState[];
export declare type IUpdatedEntities = IEntity | IEntity[] | IEntityCode | IEntityCode[];
/**
 * Interface for implementing REST Update (Patch) method.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRestUpdate extends IRestGenericUpdate {
	/**
	 * Update/patch a resource in the database.
	 * If multiple items are given, all patches will be applied in the given order.
	 *
	 * update(id, { "text": "I really have to iron" })
	 *
	 * @param {IEntityCode}       code     Code/id of the entity to be patched
	 * @param {IUpdateableEntities} entities Can be a one or more data structures matching entity's structure
	 * @param {IOptions}            options  Not used. Define whatever suits you.
	 * @returns {IUpdatedEntities}           Can return either a list of ids for the updated/created entities, either the
	 *                                       list of the created entities themselves.
	 */
	update(code: IEntityCode, entities: IUpdateableEntities, options?: IStringAnyMap): IUpdatedEntities;
}
/**
 * Interface for implementing REST Update query.
 */
export interface IRestUpdateQuery extends IRestGenericUpdate {
	/**
	 * Generate string query for `Update.update` method.
	 *
	 * update(id, { "text": "I really have to iron" })
	 *
	 * @param {IEntityCode}       code     Code/id of the entity to be patched
	 * @param {IUpdateableEntities} entities Can be a one or more data structures matching entity's structure
	 * @param {IOptions}            options  Not used. Define whatever suits you.
	 * @returns {string}
	 */
	update(code: IEntityCode, entities: IUpdateableEntities, options?: IStringAnyMap): string;
}
/**
 * Interface for implementing REST methods.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */
export interface IRest extends IRestCreate, IRestDelete, IRestFetch, IRestReplace, IRestRetreive, IRestUpdate {
}
/**
 * Interface for implementing CRUD query methods.
 */
export interface IRestQuery extends IRestCreateQuery, IRestDeleteQuery, IRestFetchQuery, IRestRetreiveQuery, IRestUpdateQuery {
}