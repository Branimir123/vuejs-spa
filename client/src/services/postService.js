import axios from 'axios';

import {
  POSTS_GET_ALL_URL,
  POSTS_GET_SINGLE_URL,
  POSTS_ADD_URL,
  POSTS_EDIT_URL,
} from './servicesConfig';

class PostService {
  /**
   * GET: /api/posts
   * returns: a list of all posts with shortened data
  */
  static getAllPosts() {
    return axios({
      method: 'get',
      url: POSTS_GET_ALL_URL,
      headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01',
      },
    });
  }

  /**
   * GET: /api/posts/:id
   * returns: single post and all of it's data
  */
  static getPost(id) {
    return axios({
      method: 'get',
      url: `${POSTS_GET_SINGLE_URL}${id}`,
      headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01',
      },
    });
  }

  /**
   * POST: /api/posts/:id
   * returns: :id of post
  */
  static addPost(params) {
    return axios({
      method: 'post',
      params,
      url: `${POSTS_ADD_URL}`,
      headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01',
      },
    });
  }

  /**
   * PUT: /api/posts/:id
   * returns: :id of post
  */
  static editPost(params) {
    return axios({
      method: 'put',
      params,
      url: `${POSTS_EDIT_URL}`,
      headers: {
        Accept: 'application/json, text/javascript, */*; q=0.01',
      },
    });
  }
}

export default PostService;
