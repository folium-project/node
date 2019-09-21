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
import { IStringAnyMap } from '../types';
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
