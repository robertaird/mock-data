import type { FetchResult } from '@apollo/client';
import type { MockedResponse } from '@apollo/client/testing';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { Dogs, GET_DOGS } from '../GetDogsQuery';

type DogsData = {
  dogs: Dogs[];
};

export const DogFactory = Factory.define<Dogs>(({ sequence }) => {
  return {
    __typename: 'Dog',
    id: sequence.toString(),
    breed: faker.animal.dog(),
  };
});

export const createGetDogsResult = (): DogsData => ({
  dogs: DogFactory.buildList(5),
});

export const getDogsQueryResponse = (): MockedResponse<DogsData> => ({
  request: {
    query: GET_DOGS,
  },
  result: { data: createGetDogsResult() },
});
