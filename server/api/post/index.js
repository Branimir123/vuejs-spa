import dataInit from './post.data';
import controllerInit from './post.controller';
import routerInit from './post.routes'
import Post from './post.model';

export default (config, utils) => {
    const data = dataInit(Post, utils);

    const controller = controllerInit(data);

    const router = routerInit(controller);

    return router;
};