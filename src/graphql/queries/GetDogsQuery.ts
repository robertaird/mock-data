import { gql } from '@apollo/client';

export type Dogs = {
  __typename: string;
  id: string;
  breed: string;
  color: string;
  description: string;
  name: string;
  imageUrl: string;
  hairLength: number;
  isGoodBoy: boolean;
};

export const GET_DOGS = gql`
  query GetDogs($quantity: Number) {
    dogs(quantity: $quantity) {
      id
      breed
      color
      description
      imageUrl
      isGoodBoy
      name
      hairLength
    }
  }
`;
