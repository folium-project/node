define('index', ['exports'], function (exports) { 'use strict';

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
  var Entity = /** @class */ (function () {
      function Entity(state) {
          this.state = state;
          if (!this.state.code) {
              this.state.code = this.codeGenerate();
          }
      }
      // public getValidator()
      Entity.prototype.toJson = function () {
          return JSON.stringify(this.toObject());
      };
      Entity.prototype.toObject = function () {
          return this.state;
      };
      Object.defineProperty(Entity.prototype, "code", {
          get: function () {
              return this.state.code;
          },
          enumerable: true,
          configurable: true
      });
      return Entity;
  }());

  exports.Entity = Entity;

  Object.defineProperty(exports, '__esModule', { value: true });

});