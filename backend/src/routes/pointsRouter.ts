import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import multer from 'multer';
import multerConfig from '../config/multer';

import PointsController from '../controllers/PointsController';

const pointsRouter = Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();

pointsRouter.get('/', pointsController.index);
pointsRouter.get('/:id', pointsController.show);

pointsRouter.post(
  '/',
  upload.single('image'),
  celebrate(
    {
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2).min(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false,
    },
  ),
  pointsController.create,
);

export default pointsRouter;
