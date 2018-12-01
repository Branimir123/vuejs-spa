'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  return {
    create: function create(req, res, next) {
      var user = req.body;

      if (!user || !user.email || !user.password) {
        return res.sendStatus(400);
      }

      data.findByEmail(user.email).then(function (existingUser) {
        if (existingUser) {
          return res.sendStatus(400).send({
            error: 'User already exists'
          });
        }

        return data.create(user);
      }).then(function () {
        return res.send({
          email: user.email,
          name: user.name
        });
      }).catch(function (err) {
        return next(err);
      });
    },
    update: function update(req, res, next) {
      var id = req.params.id,
          options = req.body;

      data.updateUser(id, options).then(function (user) {
        if (!user) {
          return res.sendStatus(404);
        }

        return res.send(user);
      }).catch(function (err) {
        res.send(err);
      });
    },
    getProfile: function getProfile(req, res, next) {
      var id = req.params.id;

      data.getById(id).then(function (user) {
        if (!user) {
          return res.sendStatus(404);
        }

        return res.send(user);
      });
    },
    getAll: function getAll(req, res) {
      data.getAll().then(function (users) {
        users = users.map(function (u) {
          u.password = null;
          return u;
        });

        return res.send(users);
      });
    },
    delete: function _delete(req, res) {
      var id = req.params.id;

      data.delete(id).then(function () {
        res.sendStatus(204);
      });
    },
    toggleAdmin: function toggleAdmin(req, res) {
      var id = req.params.id;
      var makeAdmin = req.body.makeAdmin;

      data.toggleAdmin(id, makeAdmin).then(function (user) {
        res.send(user);
      }).catch(function (err) {
        return console.log;
      });
    }
  };
};
//# sourceMappingURL=user.controller.js.map