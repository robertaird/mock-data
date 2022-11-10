import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Dogs } from 'graphql/queries';

type ControlPanelProps = {
  setQuantity: (value: React.SetStateAction<number>) => void;
  quantity: number;
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<
    ApolloQueryResult<{
      dogs: Dogs[];
    }>
  >;
};

export const ControlPanel = ({
  setQuantity,
  quantity,
  refetch,
}: ControlPanelProps) => {
  return (
    <Grid xs={12}>
      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          onChange={({ target }) => {
            const newQuantity = parseInt(target.value, 10);
            if (!isNaN(newQuantity)) {
              setQuantity(newQuantity);
            } else {
              setQuantity(1);
            }
          }}
          label="Quantity"
          variant="filled"
          size="small"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          sx={{ width: '6rem' }}
          value={quantity}
        />
        <Button
          onClick={() => refetch({ quantity })}
          variant="outlined"
          sx={{ height: 'fit-content' }}
        >
          Re-Fetch
        </Button>
      </Box>
    </Grid>
  );
};
