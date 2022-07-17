import { rest } from 'msw';

export const handlers = [
  rest.get('/likes/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Lord of the Rings II',
        imageUrl: '/book-cover.jpg',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      }),
    );
  }),
  rest.get('https://dummy.com/projects', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Project 1',
          description: 'Description 1',
          categories: ['cat1', 'cat2'],
          image: 'https://dummyimage.com/200x200/000/fff',
        },
        {
          id: 2,
          name: 'Project 2',
          description: 'Description 2',
          categories: ['cat1', 'cat3'],
          image: 'https://dummyimage.com/200x200/000/fff',
        },
        {
          id: 3,
          name: 'Project 3',
          description: 'Description 3',
          categories: ['cat2', 'cat3'],
          image: 'https://dummyimage.com/200x200/000/fff',
        },
        {
          id: 4,
          name: 'Project 4',
          description: 'Description 4',
          categories: ['cat1', 'cat2', 'cat3'],
          image: 'https://dummyimage.com/200x200/000/fff',
        },
      ]),
    );
  }),
];
