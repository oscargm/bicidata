import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'fontsource-roboto/400.css';
import { Landing } from 'scenes';

const theme = createMuiTheme({
  palette: {},
});

const Application: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
};
ReactDOM.render(<Application />, document.getElementById('root'));
