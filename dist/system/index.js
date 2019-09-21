System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

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
      var Model = exports('Model', /** @class */ (function () {
          function Model(state) {
              if (state === void 0) { state = {}; }
              this.state = {};
              this.state = Object.assign(this.state, state || {});
          }
          Model.fromObject = function (state, klass) {
              // const instance = Object.create(klass.prototype)
              // instance.state = state
              // return instance as T;
              return new klass(state);
          };
          Model.fromJson = function (state, klass) {
              return Model.fromObject(JSON.parse(state), klass);
          };
          Model.fake = function () {
              return new Model({});
          };
          Object.defineProperty(Model.prototype, "id", {
              get: function () {
                  return this.state.id;
              },
              enumerable: true,
              configurable: true
          });
          Model.prototype.toObject = function () {
              var state = {};
              for (var _i = 0, _a = Object.entries(this.state); _i < _a.length; _i++) {
                  var _b = _a[_i], key = _b[0], value = _b[1];
                  state[key] = value instanceof Model ? value.toObject() : value;
              }
              return state;
          };
          Model.prototype.toJson = function () {
              return JSON.stringify(this.toObject());
          };
          Model.prototype.toString = function () {
              if (this.constructor !== Model) {
                  return "@Folium\\Model\\" + this.constructor.name + "\\" + this.id;
              }
              return "@Folium\\Model\\" + this.id;
          };
          return Model;
      }()));

    }
  };
});
