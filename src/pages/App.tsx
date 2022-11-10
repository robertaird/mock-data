import { Container, Typography } from '@mui/material';
import logo from './dog.svg';
import classes from './App.module.css';
import { Dogs } from './components';

export function App() {
  return (
    <div className={classes['App']}>
      <header className={classes['App-header']}>
        <img src={logo} className={classes['App-logo']} alt="logo" />
        <Typography variant="h3">
          Good Boys
          <Typography variant="h3" color="text.disabled" component="span">
            (?)
          </Typography>
        </Typography>
      </header>
      <Container>
        <Dogs />
      </Container>
    </div>
  );
}
