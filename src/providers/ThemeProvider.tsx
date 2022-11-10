import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
