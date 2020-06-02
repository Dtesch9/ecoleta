import { Router, Request, Response } from 'express';

import Points from '../database/entities/Points';
import knex from '../database/connection';

const pointsRouter = Router();

pointsRouter.post('/', async (request: Request, response: Response) => {
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = request.body;

  const trx = await knex.transaction();

  const [point_id] = await trx('points').insert({
    image: 'image-default.svg',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  const pointItems = items.map((item_id: number) => ({
    item_id,
    point_id,
  }));

  await trx('point_items').insert(pointItems);

  return response.json({ ok: 'ok' });
});

export default pointsRouter;
