import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
