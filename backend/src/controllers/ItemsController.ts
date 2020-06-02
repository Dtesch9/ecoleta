import { Request, Response } from 'express';

import Item from '../database/entities/Item';

import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response): Promise<Response> {
    const items = await knex.table<Item>('items').select('*');

    const serializedItems = items.map(item => ({
      ...item,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    }));

    return response.json(serializedItems);
  }
}

export default PointsController;
