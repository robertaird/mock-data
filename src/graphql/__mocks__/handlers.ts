import { graphql } from 'msw';
import { createGetDogsResult } from '../queries/__mocks__/GetDogsQueryMock';

export const handlers = [
  graphql.query('GetDogs', async (req, res, ctx) => {
    const data = await createGetDogsResult(req.variables.quantity);
    return res(ctx.data(data));
  }),
];
