/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
"use strict";

const ON_PREFIX = "on";
const TAB_PREFIX = "Tab";

const EVENTS = {
  ready: "DOMContentLoaded",
  open: "TabOpen",
  close: "TabClose",
  activate: "TabSelect",
  deactivate: null,
  pinned: "TabPinned",
  unpinned: "TabUnpinned"
}
exports.EVENTS = EVENTS;

Object.keys(EVENTS).forEach(function(name) {
  EVENTS[name] = {
    name: name,
    listener: ON_PREFIX + name.charAt(0).toUpperCase() + name.substr(1),
    dom: EVENTS[name]
  }
});
