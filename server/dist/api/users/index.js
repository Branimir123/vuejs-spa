'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./user.data');

var _user2 = _interopRequireDefault(_user);

var _user3 = require('./user.controller');

var _user4 = _interopRequireDefault(_user3);

var _user5 = require('./user.routes');

var _user6 = _interopRequireDefault(_user5);

var _user7 = require('./user.model');

var _user8 = _interopRequireDefault(_user7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config, utils) {
    var data = (0, _user2.default)(_user8.default, utils);

    var controller = (0, _user4.default)(data);

    var router = (0, _user6.default)(controller);

    return router;
};
//# sourceMappingURL=index.js.map