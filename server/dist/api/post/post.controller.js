'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  return {
    create: function create(req, res, next) {
      var post = req.body;

      if (!post || !post.title) {
        return res.sendStatus(400);
      }

      data.getById(post.id).then(function (existingPost) {
        if (existingPost) {
          return res.sendStatus(400).send({
            error: 'post already exists'
          });
        }

        return data.create(post);
      }).then(function () {
        return res.send({
          title: post.title,
          description: post.description
        });
      }).catch(function (err) {
        return next(err);
      });
    },
    update: function update(req, res, next) {
      var id = req.params.id,
          options = req.body;

      data.updatePost(id, options).then(function (post) {
        if (!post) {
          return res.sendStatus(404);
        }

        return res.send(post);
      }).catch(function (err) {
        res.send(err);
      });
    },
    getOne: function getOne(req, res, next) {
      var id = req.params.id;

      data.getById(id).then(function (post) {
        if (!post) {
          return res.sendStatus(404);
        }

        return res.send(post);
      });
    },
    getAll: function getAll(req, res) {
      data.getAll().then(function (posts) {
        posts = posts.map(function (u) {
          return u;
        });

        return res.send(posts);
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

      data.toggleAdmin(id, makeAdmin).then(function (post) {
        res.send(post);
      }).catch(function (err) {
        return console.log;
      });
    }
  };
};
//# sourceMappingURL=post.controller.js.map