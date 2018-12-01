'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

exports.default = function (Post) {
  return {
    create: function create(post) {
      var newPost = new Post({
        email: post.email,
        name: post.name
      });

      return new _bluebird.Promise(function (resolve, reject) {
        newPost.save(function (err) {
          if (err) {
            reject(err);
          }

          resolve(post);
        });
      });
    },
    getById: function getById(id) {
      return Post.findById(id).populate({
        path: 'comments'
      }).then(function (populated) {
        return _bluebird.Promise.resolve(populated);
      });
    },
    updatePost: function updatePost(id, options) {
      return new _bluebird.Promise(function (resolve, reject) {
        Post.findById(id, function (err, post) {
          if (err) {
            reject(err);
          }

          if (!post) {
            return resolve(null);
          }

          post.title = options.title || post.title;
          post.description = options.description || post.description;
          post.picture = options.picture || post.picture;

          post.save(function (err) {
            if (err) {
              reject(err);
            }

            resolve(post);
          });
        });
      });
    },
    getAll: function getAll() {
      return Post.find({});
    },
    delete: function _delete(id) {
      return Post.remove({ _id: id });
    }
  };
};
//# sourceMappingURL=post.data.js.map