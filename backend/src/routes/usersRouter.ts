import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => response.json({ message: 'ok' }));

export default usersRouter;
