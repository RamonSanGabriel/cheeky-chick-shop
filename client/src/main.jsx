import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider> */}
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>
);
