import type { MockedResponse } from '@apollo/client/testing';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { Dogs, GET_DOGS } from '../GetDogsQuery';
import { FetchResult } from '@apollo/client';

type DogsData = {
  dogs: Dogs[];
};

export const DogFactory = Factory.define<Dogs>(({ sequence }) => {
  const isGoodBoy = faker.datatype.boolean();
  return {
    __typename: 'Dog',
    id: sequence.toString(),
    description: `This ${isGoodBoy ? '' : 'not so '}good boy...`,
    breed: faker.animal.dog(),
    color: faker.color.human(),
    name: faker.name.lastName(),
    imageUrl: faker.image.imageUrl(380, 200, 'dogs', true),
    isGoodBoy,
  };
});

export const createGetDogsResult = (quantity = 5): DogsData => ({
  dogs: DogFactory.buildList(quantity),
});

export const getDogsQueryResponse = (
  quantity?: number
): MockedResponse<DogsData> & { result: FetchResult<DogsData> } => ({
  request: {
    query: GET_DOGS,
    variables: {
      quantity,
    },
  },
  result: { data: createGetDogsResult(quantity) },
});
