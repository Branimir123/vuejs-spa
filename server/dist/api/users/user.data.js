'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bluebird = require('bluebird');

exports.default = function (User, _ref) {
  var passwordHasher = _ref.passwordHasher;

  return {
    create: function create(user) {
      var hashedPassword = passwordHasher.hashPassword(user.password);

      var newUser = new User({
        email: user.email,
        name: user.name,
        password: hashedPassword
      });

      return new _bluebird.Promise(function (resolve, reject) {
        newUser.save(function (err) {
          if (err) {
            reject(err);
          }

          resolve(user);
        });
      });
    },
    findByEmail: function findByEmail(email) {
      return new _bluebird.Promise(function (resolve, reject) {
        User.findOne({
          email: email
        }, function (err, user) {
          if (err) {
            reject(err);
          }

          resolve(user);
        });
      });
    },
    getById: function getById(id) {
      return User.findById(id).populate({
        path: 'events'
      }).then(function (populated) {
        return _bluebird.Promise.resolve(populated);
      });
    },
    updateUser: function updateUser(id, options) {
      return new _bluebird.Promise(function (resolve, reject) {
        User.findById(id, function (err, user) {
          if (err) {
            reject(err);
          }

          if (!user) {
            return resolve(null);
          }

          user.email = options.email || user.email;
          user.name = options.name || user.name;
          user.picture = options.picture || user.picture;

          user.save(function (err) {
            if (err) {
              reject(err);
            }

            resolve(user);
          });
        });
      });
    },
    getAll: function getAll() {
      return User.find({});
    },
    delete: function _delete(id) {
      return User.remove({ _id: id });
    },
    toggleAdmin: function toggleAdmin(id, makeAdmin) {
      return User.findById(id).then(function (user) {
        if (makeAdmin) {
          user.role = 'admin';
        } else {
          user.role = 'user';
        }

        return user.save();
      });
    }
  };
};
//# sourceMappingURL=user.data.js.map