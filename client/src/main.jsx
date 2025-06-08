import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';                // Capital P in Provider
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>                             {/* Correct prop is 'store', not 'storage' */}
    <PersistGate loading={null} persistor={persistor}>
      <App />                                          {/* You forgot to render your App component */}
    </PersistGate>
  </Provider>
);
