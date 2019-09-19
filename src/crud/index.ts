import {ICreate, ICreateCriteria, ICreateQuery} from './create'
import {IDelete, IDeleteCriteria, IDeleteOptions, IDeleteQuery} from './delete'
import {IRead, IReadCriteria, IReadOptions, IReadQuery} from './read'
import {IUpdate, IUpdateCriteria, IUpdateQuery} from './update'

export {
  ICreate,
  ICreateCriteria,
  ICreateQuery,
  IDelete,
  IDeleteCriteria,
  IDeleteOptions,
  IDeleteQuery,
  IRead,
  IReadCriteria,
  IReadOptions,
  IReadQuery,
  IUpdate,
  IUpdateCriteria,
  IUpdateQuery
}

/**
 * Interface for implementing CRUD methods.
 * @see https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 */
export interface ICrud extends ICreate, IRead, IUpdate, IDelete {}

/**
 * Interface for implementing CRUD query methods.
 */
export interface ICrudQuery extends ICreateQuery, IReadQuery, IUpdateQuery, IDeleteQuery {}
