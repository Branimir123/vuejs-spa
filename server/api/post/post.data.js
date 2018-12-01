import { Promise } from 'bluebird';

export default (Post) => {
  return {
    create: (post) => {
      const newPost = new Post({
        email: post.email,
        name: post.name
      });

      return new Promise((resolve, reject) => {
        newPost.save((err) => {
          if (err) {
            reject(err);
          }

          resolve(post);
        })
      });
    },
    getById: (id) => {
      return Post
        .findById(id)
        .populate({
          path: 'comments'
        })
        .then(populated => {
          return Promise.resolve(populated);
        });
    },
    updatePost: (id, options) => {
      return new Promise((resolve, reject) => {
        Post.findById(id, (err, post) => {
          if (err) {
            reject(err);
          }

          if (!post) {
            return resolve(null);
          }

          post.title = options.title || post.title;
          post.description = options.description || post.description;
          post.picture = options.picture || post.picture;

          post.save((err) => {
            if (err) {
              reject(err);
            }

            resolve(post);
          });
        });
      });
    },
    getAll: () => {
      return Post.find({});
    },
    delete: (id) => {
      return Post.remove({ _id: id });
    }
  };
}