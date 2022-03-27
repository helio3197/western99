import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <h1>Nothing here!</h1>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
