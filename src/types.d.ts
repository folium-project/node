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

export interface INumberTMap<T> {
  [key: number]: T
}

export interface IStringTMap<T> {
  [key: string]: T
}

export interface INumberAnyMap extends INumberTMap<any> {}
export interface IStringAnyMap extends IStringTMap<any> {}

export interface INumberStringMap extends INumberTMap<string> {}
export interface IStringStringMap extends IStringTMap<string> {}

export interface INumberNumberMap extends INumberTMap<number> {}
export interface IStringNumberMap extends IStringTMap<number> {}

export interface INumberBooleanMap extends INumberTMap<boolean> {}
export interface IStringBooleanMap extends IStringTMap<boolean> {}
