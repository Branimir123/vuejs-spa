'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    email: {
        type: String,
        match: /^\S+@\S+\.\S+$/,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    name: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true
    },
    age: Number,
    services: {
        // facebook: String,
        // google: String,
    },
    role: {
        type: String,
        // enum: roles,
        default: 'user'
    },
    picture: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

var User = _mongoose2.default.model('User', userSchema);

exports.default = User;
//# sourceMappingURL=user.model.js.map