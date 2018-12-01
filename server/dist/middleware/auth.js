'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (passport) {
    return function (req, res, next) {
        return passport.authenticate('jwt', { session: false })(req, res, next);
    };
};
//# sourceMappingURL=auth.js.map