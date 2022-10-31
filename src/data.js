import { v4 as uuidv4 } from 'uuid';

const hotels = [
  {
    id: uuidv4(),
    title: 'Tropical Hotel',
    image:
      'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eum enim, unde mollitia impedit eius. Unde delectus velit error quo, magni vel repellat quidem accusantium soluta, est quibusdam, eaque quasi!',
    price: 100,
  },
  {
    id: uuidv4(),
    title: 'Country Hotel',
    image:
      'https://images.unsplash.com/photo-1623068769255-923b5307dd7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eum enim, unde mollitia impedit eius. Unde delectus velit error quo, magni vel repellat quidem accusantium soluta, est quibusdam, eaque quasi!',
    price: 200,
  },
  {
    id: uuidv4(),
    title: 'Luxury Hotel',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eum enim, unde mollitia impedit eius. Unde delectus velit error quo, magni vel repellat quidem accusantium soluta, est quibusdam, eaque quasi!',
    price: 300,
  },
  {
    id: uuidv4(),
    title: 'Students Hotel',
    image:
      'https://images.unsplash.com/photo-1553386070-c81b0b73f3f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eum enim, unde mollitia impedit eius. Unde delectus velit error quo, magni vel repellat quidem accusantium soluta, est quibusdam, eaque quasi!',
    price: 400,
  },
  {
    id: uuidv4(),
    title: 'Coworking Hotel',
    image:
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eum enim, unde mollitia impedit eius. Unde delectus velit error quo, magni vel repellat quidem accusantium soluta, est quibusdam, eaque quasi!',
    price: 500,
  },
];

export default hotels;
