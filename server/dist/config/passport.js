'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (config) {
    var options = {
        secretOrKey: config.jwtSecret,
        jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme('Bearer')
    };

    var jwtVerify = function jwtVerify(payload, done) {
        _user2.default.findById(payload.sub, function (err, user) {
            if (err) {
                return done(err, false);
            }

            if (user) {
                return done(null, user);
            }

            return done(null, false);
        });
    };

    // passport.serializeUser((user, done) => {
    //     done(null, user.id);
    // });

    // passport.deserializeUser((id, done) => {
    //     User.findById(id, (err, user) => {
    //         done(err, user);
    //     });
    // });

    return {
        passport: _passport2.default,
        strategies: { jwt: new _passportJwt.Strategy(options, jwtVerify) }
    };
};

var _passportJwt = require('passport-jwt');

var _user = require('../api/users/user.model');

var _user2 = _interopRequireDefault(_user);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=passport.js.map