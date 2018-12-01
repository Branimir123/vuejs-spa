'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (config) {
    return {
        passwordHasher: _passwordHasher2.default,
        tokenManager: (0, _tokenManager2.default)(config)
    };
};

var _passwordHasher = require('./password-hasher');

var _passwordHasher2 = _interopRequireDefault(_passwordHasher);

var _tokenManager = require('./token-manager');

var _tokenManager2 = _interopRequireDefault(_tokenManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map