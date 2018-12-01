'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var jwt = require('jwt-simple');

exports.default = function (config) {
    return {
        encode: function encode(payload) {
            return jwt.encode(payload, config.jwtSecret);
        }
    };
};
//# sourceMappingURL=token-manager.js.map