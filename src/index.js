import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const Container = () => (
	<MuiThemeProvider>
		<App/>
	</MuiThemeProvider>
);

ReactDOM.render(
  <Container/>,
  document.getElementById('root')
);
