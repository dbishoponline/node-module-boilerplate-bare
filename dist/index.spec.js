"use strict";

var _ava = require("ava");

var _ava2 = _interopRequireDefault(_ava);

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-register");
require("babel-polyfill");

// before running test
_ava2.default.beforeEach(function (t) {
  t.context.log = console.log;

  console.log = _sinon2.default.spy();
});

// after running test
_ava2.default.afterEach(function (t) {
  console.log = t.context.log;
});

(0, _ava2.default)('will log true', function (t) {
  t.true(true);
});