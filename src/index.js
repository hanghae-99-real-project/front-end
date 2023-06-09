import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/config/configStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
