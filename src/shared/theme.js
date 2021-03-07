import { createMuiTheme } from '@material-ui/core/styles';
export default {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#22222226',
  },
};

const getMaterialUItheme = (type) =>
  createMuiTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      type: type,
      primary: { main: '#ccc', contrastText: '#000' },
      secondary: { main: '#8b3694', contrastText: '#fff' },
    },
    typography: {
      allVariants: {
        color: type === 'light' ? '#444' : '#fff',
      },
    },
  });
export { getMaterialUItheme };
