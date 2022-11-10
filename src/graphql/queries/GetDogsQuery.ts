import { gql } from '@apollo/client';

export type Dogs = {
  __typename: string;
  id: string;
  breed: string;
};

export const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;
