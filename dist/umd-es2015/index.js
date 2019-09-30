(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.folium = {})));
}(this, (function (exports) { 'use strict';

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
  class Entity {
      constructor(state) {
          this.state = state;
          if (!this.state.code) {
              this.state.code = this.codeGenerate();
          }
      }
      // public getValidator()
      toJson() {
          return JSON.stringify(this.toObject());
      }
      toObject() {
          return this.state;
      }
      get code() {
          return this.state.code;
      }
  }

  exports.Entity = Entity;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
