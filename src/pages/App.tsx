import logo from './dog.svg';
import classes from './App.module.css';
import { Dogs } from './components';

export function App() {
  return (
    <div className={classes['App']}>
      <header className={classes['App-header']}>
        <img src={logo} className={classes['App-logo']} alt="logo" />
        <Dogs />
      </header>
    </div>
  );
}
