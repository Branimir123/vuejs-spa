import { Router } from 'express';

import authRouterInit from './auth'
import userRouterInit from './users'

export default (app, config, utils, middleware) => {
  const router = Router();

  const userRouter = userRouterInit(config, utils);
  router.use('/users', userRouter);

  const authRouter = authRouterInit(config, utils);
  router.use('/login', authRouter);

  app.use('/api', router);
}