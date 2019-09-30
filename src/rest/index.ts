import {IRestCreate, IRestCreateQuery} from './create'
import {IRestDelete, IRestDeleteQuery} from './delete'
import {IRestFetch, IRestFetchQuery} from './fetch'
import {IRestReplace} from './replace'
import {IRestRetreive, IRestRetreiveQuery} from './retrieve'
import {IRestUpdate, IRestUpdateQuery} from './update'

export * from './create'
export * from './delete'
export * from './fetch'
export * from './replace'
export * from './retrieve'
export * from './update'

/**
 * Interface for implementing REST methods.
 * @see https://en.wikipedia.org/wiki/Representational_state_transfer
 */

export interface IRest extends IRestCreate, IRestDelete, IRestFetch, IRestReplace, IRestRetreive, IRestUpdate {}

/**
 * Interface for implementing CRUD query methods.
 */
export interface IRestQuery
  extends IRestCreateQuery,
    IRestDeleteQuery,
    IRestFetchQuery,
    IRestRetreiveQuery,
    IRestUpdateQuery {}
