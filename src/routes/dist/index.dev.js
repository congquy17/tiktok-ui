"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRoutes = exports.publicRoutes = void 0;

var _Layout = require("~/components/Layout");

var _Home = _interopRequireDefault(require("~/pages/Home"));

var _Following = _interopRequireDefault(require("~/pages/Following"));

var _Profile = _interopRequireDefault(require("~/pages/Profile"));

var _Upload = _interopRequireDefault(require("~/pages/Upload"));

var _Search = _interopRequireDefault(require("~/pages/Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicRoutes = [// default layout
{
  path: '/',
  component: _Home["default"]
}, {
  path: '/following',
  component: _Following["default"]
}, {
  path: '/profile',
  component: _Profile["default"]
}, {
  path: '/upload',
  component: _Upload["default"],
  layout: _Layout.HeaderOnly
}, {
  path: '/search',
  component: _Search["default"],
  layout: null
}];
exports.publicRoutes = publicRoutes;
var privateRoutes = [];
exports.privateRoutes = privateRoutes;