'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
	_mongoose2.default.Promise = global.Promise;
	_mongoose2.default.connect(config.connectionString);

	console.log('Connection string:', config.connectionString);

	_mongoose2.default.connection.on('error', function (err) {
		console.log(err);
		console.log('MongoDB connection error. Please make sure MongoDB is running.');
		process.exit();
	});
};
//# sourceMappingURL=db.js.map