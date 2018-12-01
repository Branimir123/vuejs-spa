'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

exports.default = function (controller) {
  var router = new _express.Router();

  router.post('', controller.create);
  router.get('', controller.getAll);

  router.get('/:id', controller.getOne);
  router.put('/:id', controller.update);
  router.delete('/:id', controller.delete);

  return router;
};
//# sourceMappingURL=post.routes.js.map