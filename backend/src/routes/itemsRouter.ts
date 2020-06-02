import { Router } from 'express';

import Item from '../database/entities/Item';
import knex from '../database/connection';

const itemsRouter = Router();

itemsRouter.get('/', async (request, response) => {
  const items = await knex.table<Item>('items').select('*');

  const serializedItems = items.map(item => ({
    ...item,
    image_url: `http://localhost:3333/uploads/${item.image}`,
  }));

  return response.json(serializedItems);
});

export default itemsRouter;
