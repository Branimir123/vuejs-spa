export default (data) => {
    return {
      create: (req, res, next) => {
        const post = req.body;
  
        if (!post || !post.title) {
          return res
            .sendStatus(400);
        }
  
        data.getById(post.id)
          .then((existingPost) => {
            if (existingPost) {
              return res
                .sendStatus(400)
                .send({
                  error: 'post already exists'
                });
            }
  
            return data.create(post);
          })
          .then(() => {
            return res
              .send({
                title: post.title,
                description: post.description
              })
          })
          .catch(err => next(err));
      },
      update: (req, res, next) => {
        const id = req.params.id,
          options = req.body;
  
        data.updatePost(id, options)
          .then(post => {
            if (!post) {
              return res.sendStatus(404);
            }
  
            return res.send(post);
          })
          .catch(err => {
            res.send(err)
          });
      },
      getOne: (req, res, next) => {
        const id = req.params.id;
  
        data.getById(id)
          .then(post => {
            if (!post) {
              return res.sendStatus(404);
            }
  
            return res.send(post);
          });
      },
      getAll: (req, res) => {
        data.getAll()
          .then(posts => {
            posts = posts.map(u => {
              return u;
            });
  
            return res.send(posts);
          });
      },
      delete: (req, res) => {
        const id = req.params.id;
  
        data.delete(id)
          .then(() => {
            res.sendStatus(204);
          });
      },
      toggleAdmin: (req, res) => {
        const id = req.params.id;
        const makeAdmin = req.body.makeAdmin;
  
        data.toggleAdmin(id, makeAdmin)
          .then((post) => {
            res.send(post);
          })
          .catch(err => console.log);
      }
    }
  }