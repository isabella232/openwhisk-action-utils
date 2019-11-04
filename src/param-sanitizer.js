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

/* eslint-disable no-underscore-dangle */

const sanitize = (params) => {
  const sanitizedParams = { ...params };
  Object.keys(sanitize)
    .forEach((key) => {
      if (key.match(/^[A-Z0-9_]+$/)) {
        sanitizedParams[key] = '[undisclosed secret]';
      }
    });

  if (sanitizedParams.__ow_headers && sanitizedParams.__ow_headers.authorization) {
    sanitizedParams.__ow_headers.authorization = '[undisclosed secret]';
  }

  return sanitizedParams;
};

module.exports = {
  sanitize,
};
