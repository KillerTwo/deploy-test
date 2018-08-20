import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './page/home';
ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
