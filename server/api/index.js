import { Router } from 'express';

import authRouterInit from './auth';
import userRouterInit from './users';
import postRouterInit from './post';

export default (app, config, utils, middleware) => {
  const router = Router();

  const userRouter = userRouterInit(config, utils);
  router.use('/users', userRouter);

  const authRouter = authRouterInit(config, utils);
  router.use('/login', authRouter);

  const postRouter = postRouterInit(config, utils);
  router.use('/posts', postRouter);

  app.use('/api', router);
}