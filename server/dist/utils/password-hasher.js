'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bcryptNodejs = require('bcrypt-nodejs');

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasher = {
    hashPassword: function hashPassword(password) {
        var salt = _bcryptNodejs2.default.genSaltSync(10);

        var hashedPassword = _bcryptNodejs2.default.hashSync(password, salt);

        return hashedPassword;
    },
    verifyPassword: function verifyPassword(hashedPassword, password) {
        var isMatch = _bcryptNodejs2.default.compareSync(password, hashedPassword);

        return isMatch;
    }
};

exports.default = hasher;
//# sourceMappingURL=password-hasher.js.map