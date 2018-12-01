'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

exports.default = function (controller) {
  var router = new _express.Router();

  router.post('', controller.create);
  router.get('', controller.getAll);
  router.put('/:id', controller.update);
  router.put('/:id/admin', controller.toggleAdmin);
  router.get('/:id', controller.getProfile);
  router.delete('/:id', controller.delete);

  return router;
};
//# sourceMappingURL=user.routes.js.map