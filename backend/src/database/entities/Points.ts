import Item from './Item';

class Points {
  id!: number;

  image!: string;

  name!: string;

  email!: string;

  whatsapp!: string;

  latitude!: number;

  longitude!: number;

  city!: string;

  uf!: string;

  items!: Item[];
}

export default Points;
