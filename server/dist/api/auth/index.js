'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('../users/user.model');

var _user2 = _interopRequireDefault(_user);

var _auth = require('./auth.controller');

var _auth2 = _interopRequireDefault(_auth);

var _auth3 = require('./auth.routes');

var _auth4 = _interopRequireDefault(_auth3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config, utils) {
    var controller = (0, _auth2.default)(_user2.default, utils);

    var router = (0, _auth4.default)(controller);

    return router;
};
//# sourceMappingURL=index.js.map