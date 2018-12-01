'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _post = require('./post.data');

var _post2 = _interopRequireDefault(_post);

var _post3 = require('./post.controller');

var _post4 = _interopRequireDefault(_post3);

var _post5 = require('./post.routes');

var _post6 = _interopRequireDefault(_post5);

var _post7 = require('./post.model');

var _post8 = _interopRequireDefault(_post7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config, utils) {
    var data = (0, _post2.default)(_post8.default, utils);

    var controller = (0, _post4.default)(data);

    var router = (0, _post6.default)(controller);

    return router;
};
//# sourceMappingURL=index.js.map