import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureAppStore } from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
