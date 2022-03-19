import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,  } from 'react-router-dom'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
