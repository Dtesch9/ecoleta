import { Router } from 'express';

import itemsRouter from './itemsRouter';
import pointsRouter from './pointsRouter';

const routes = Router();

routes.use('/items', itemsRouter);
routes.use('/points', pointsRouter);

export default routes;
