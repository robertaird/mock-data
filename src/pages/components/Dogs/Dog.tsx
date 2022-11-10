import type { Dogs as DogsType } from 'graphql/queries';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from '@mui/material';

export const Dog = ({
  breed,
  color,
  description,
  name,
  imageUrl,
  isGoodBoy,
  hairLength,
}: Partial<DogsType>) => (
  <Grid xs={6} md={4}>
    <Card sx={{ textAlign: 'left' }}>
      <CardMedia component="img" height={180} src={imageUrl} alt={breed} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {breed}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          display="flex"
          alignItems="center"
        >
          <Checkbox
            checked={isGoodBoy}
            disableRipple
            sx={{ pointerEvents: 'none' }}
          />
          Is a good boy?
        </Typography>
        <Typography
          variant="body2"
          component="div"
          display="flex"
          alignItems="center"
        >
          Color: {color}
        </Typography>
        <Typography
          variant="body2"
          component="div"
          display="flex"
          alignItems="center"
        >
          Hair length: {hairLength}cm
        </Typography>
        <Typography
          variant="body2"
          component="div"
          display="flex"
          alignItems="center"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);
