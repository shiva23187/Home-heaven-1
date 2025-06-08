import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store, storem} from './redux/store.js';
import { provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>,
);
