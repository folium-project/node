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
class Model {
    constructor(state = {}) {
        this.state = {};
        this.state = Object.assign(this.state, state || {});
    }
    static fromObject(state, klass) {
        // const instance = Object.create(klass.prototype)
        // instance.state = state
        // return instance as T;
        return new klass(state);
    }
    static fromJson(state, klass) {
        return Model.fromObject(JSON.parse(state), klass);
    }
    static fake() {
        return new Model({});
    }
    get id() {
        return this.state.id;
    }
    toObject() {
        const state = {};
        for (const [key, value] of Object.entries(this.state)) {
            state[key] = value instanceof Model ? value.toObject() : value;
        }
        return state;
    }
    toJson() {
        return JSON.stringify(this.toObject());
    }
    toString() {
        if (this.constructor !== Model) {
            return `@Folium\\Model\\${this.constructor.name}\\${this.id}`;
        }
        return `@Folium\\Model\\${this.id}`;
    }
}

export { Model };
