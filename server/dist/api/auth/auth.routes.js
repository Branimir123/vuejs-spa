'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

exports.default = function (controllers) {
    var router = new _express.Router();

    router.post('', controllers.login);

    return router;
};
//# sourceMappingURL=auth.routes.js.map