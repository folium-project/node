import {ICrudCreate, ICrudCreateQuery} from './create'
import {ICrudDelete, ICrudDeleteQuery} from './delete'
import {ICrudRead, ICrudReadQuery} from './read'
import {ICrudUpdate, ICrudUpdateQuery} from './update'

export * from './create'
export * from './delete'
export * from './read'
export * from './update'
export * from './types'

/**
 * Interface for implementing CRUD methods.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrud extends ICrudCreate, ICrudRead, ICrudUpdate, ICrudDelete {}

/**
 * Interface for implementing CRUD query methods.
 */
export interface ICrudQuery extends ICrudCreateQuery, ICrudReadQuery, ICrudUpdateQuery, ICrudDeleteQuery {}
