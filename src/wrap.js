/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
/**
 * The `wrap` function can be used to create a chain of wrappers around
 * a `main` function. Usage:
 *
 * ```javascript
 * async main(params) {
 *   //…my action code…
 * }
 *
 * module.exports.main = wrap()
 * .with(logger)
 * .with(status)
 * .with(epsagon)
 * .run(main);
 * ```
 */
function wrap() {
  this.inner = () => { };
  this.wrapped = (...opts) => this.inner(...opts);

  this.run = (fn) => {
    // replace the innermost function
    this.inner = fn;
    // and return the full wrapper
    return this.wrapped;
  };

  this.with = (wrapper, ...opts) => {
    // add another layer of wrapping
    this.wrapped = wrapper(this.wrapped, ...opts);
    // enable chaining
    return this;
  };

  return this;
}

module.exports = { wrap };
