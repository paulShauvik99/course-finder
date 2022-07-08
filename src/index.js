import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  
    <BrowserRouter>
        <App />
    </BrowserRouter>
  ,document.getElementById('root')
);
