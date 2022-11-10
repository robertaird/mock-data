import type { MockedResponse } from '@apollo/client/testing';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { Dogs, GET_DOGS } from '../GetDogsQuery';

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
    imageUrl: faker.image.imageUrl(640, 480, 'dogs', true),
    isGoodBoy,
  };
});

export const createGetDogsResult = (amount = 5): DogsData => ({
  dogs: DogFactory.buildList(amount),
});

export const getDogsQueryResponse = (
  amount?: number
): MockedResponse<DogsData> => ({
  request: {
    query: GET_DOGS,
  },
  result: { data: createGetDogsResult(amount) },
});
