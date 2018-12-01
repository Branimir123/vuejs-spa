'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, config, utils, middleware) {
  var router = (0, _express.Router)();

  var userRouter = (0, _users2.default)(config, utils);
  router.use('/users', userRouter);

  var authRouter = (0, _auth2.default)(config, utils);
  router.use('/login', authRouter);

  var postRouter = (0, _post2.default)(config, utils);
  router.use('/posts', postRouter);

  app.use('/api', router);
};
//# sourceMappingURL=index.js.map