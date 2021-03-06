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

const materialUItheme = createMuiTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    contrastThreshold: 5,
    type: 'light',
  },
});
export { materialUItheme };
