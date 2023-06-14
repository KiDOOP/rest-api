import { Router } from 'express';
import authRoute from './auth.route';
import userRoute from './user.route';
import testRoute from './test.route';

const router = Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  { path: '/users', route: userRoute },
  { path: '/tests', route: testRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
