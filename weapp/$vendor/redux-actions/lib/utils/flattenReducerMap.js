"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(__wepy_require(16));

var _isMap = _interopRequireDefault(__wepy_require(23));

var _hasGeneratorInterface = _interopRequireDefault(__wepy_require(28));

var _flattenWhenNode = _interopRequireDefault(__wepy_require(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _flattenWhenNode.default)(function (node) {
  return ((0, _isPlainObject.default)(node) || (0, _isMap.default)(node)) && !(0, _hasGeneratorInterface.default)(node);
});

exports.default = _default;