import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'fontsource-roboto/400.css';
import { Landing } from 'scenes';

const Application: React.FC = () => {
  return <Landing />;
};
ReactDOM.render(<Application />, document.getElementById('root'));
