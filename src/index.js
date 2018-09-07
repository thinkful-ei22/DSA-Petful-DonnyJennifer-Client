import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import {Provider} from 'react-redux';
import Dashboard from './components/Dashboard';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<Provider store={store}>
<Dashboard />
</Provider>, document.getElementById('root'));
registerServiceWorker();
