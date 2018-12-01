'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (config) {
  var app = (0, _express2.default)();
  app.server = _http2.default.createServer(app);

  if (config.env === 'dev') {
    app.use((0, _morgan2.default)('dev'));
  }

  var _initializePassport = (0, _passport2.default)(config),
      passport = _initializePassport.passport,
      strategies = _initializePassport.strategies;

  app.use(_bodyParser2.default.json());
  app.use(_bodyParser2.default.urlencoded({ extended: true }));

  app.use((0, _cors2.default)());

  app.use(passport.initialize());
  passport.use('jwt', strategies.jwt);

  var utils = (0, _utils2.default)(config);

  var authMiddleware = (0, _auth2.default)(passport);

  var middleware = {
    auth: authMiddleware
  };

  (0, _db2.default)(config);

  (0, _api2.default)(app, config, utils, middleware);

  if (config.production) {
    app.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

    app.get('*', function (req, res) {
      var filePath = _path2.default.resolve(__dirname, '../public/index.html');
      res.sendFile(filePath);
    });
  }

  return app;
};

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _passport = require('./passport');

var _passport2 = _interopRequireDefault(_passport);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _utils = require('../utils');

var _utils2 = _interopRequireDefault(_utils);

var _auth = require('../middleware/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=app.js.map