"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (User, _ref) {
    var passwordHasher = _ref.passwordHasher,
        tokenManager = _ref.tokenManager;

    return {
        login: function login(req, res) {
            var _req$body = req.body,
                email = _req$body.email,
                password = _req$body.password;


            if (!email || !password) {
                return res.sendStatus(400);
            }

            User.findOne({ email: email }, function (err, user) {
                if (err) {
                    return res.send(err);
                }

                if (!user) {
                    return res.sendStatus(404);
                }

                var isMatch = passwordHasher.verifyPassword(user.password, password);

                if (!isMatch) {
                    return res.sendStatus(401);
                }

                var payload = {
                    // exp: moment().add(jwtExpirationInterval, 'minutes').unix(),
                    // iat: moment().unix(),
                    sub: user._id
                };

                var token = tokenManager.encode(payload);

                delete user.password;

                return res.send({ token: token, user: user });
            });
        }
    };
};
//# sourceMappingURL=auth.controller.js.map