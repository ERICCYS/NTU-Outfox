import React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import RootRouter from './routes';
import store from './redux/store/configStore';
import { Provider } from 'react-redux';
import './asset/css/styles.css';
import JssRegistry from './JssRegistry';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<JssRegistry>
		<Provider store={store}>
			<RootRouter />
		</Provider>
	</JssRegistry>,
	document.getElementById('root')
);

registerServiceWorker();
