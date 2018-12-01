'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _app = require('./config/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _app2.default)(_config2.default);

app.server.listen(_config2.default.port, function () {
	console.log('Started on port ' + _config2.default.port);
});

exports.default = app;
//# sourceMappingURL=index.js.map