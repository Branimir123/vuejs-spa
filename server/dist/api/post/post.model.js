'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose2.default.Schema({
    title: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    picture: {
        type: String,
        trim: true
    },
    location: {
        lat: Number,
        lng: Number
    },
    address: {
        type: String
    },
    contactNumber: {
        type: String,
        maxlength: 15
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'unknown', 'group']
    },
    status: {
        type: String,
        enum: ['lost', 'found']
    },
    isActive: {
        type: Number,
        min: 0,
        max: 1,
        default: 1
        //TODO: add comments here
    } }, {
    timestamps: true
});

var Post = _mongoose2.default.model('Post', userSchema);

exports.default = Post;
//# sourceMappingURL=post.model.js.map