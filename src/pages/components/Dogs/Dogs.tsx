import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { GET_DOGS, Dogs as DogsType } from 'graphql/queries';
import { ControlPanel } from './ControlPanel';
import { Dog } from './Dog';

export const Dogs = () => {
  const [quantity, setQuantity] = useState(6);
  const { data, loading, refetch } = useQuery<{ dogs: DogsType[] }>(GET_DOGS, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
    variables: { quantity },
  });

  if (!data || loading) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      <ControlPanel
        refetch={refetch}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      {data.dogs?.map(({ id, breed, color, imageUrl, name, isGoodBoy }) => (
        <Dog
          key={id}
          breed={breed}
          color={color}
          imageUrl={imageUrl}
          name={name}
          isGoodBoy={isGoodBoy}
        />
      ))}
    </Grid>
  );
};
