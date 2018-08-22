import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import MyRouter from './router/myrouter';

ReactDOM.render(<MyRouter />, document.getElementById('root'));
registerServiceWorker();
