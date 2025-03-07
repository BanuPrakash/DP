import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Provider } from 'mobx-react';
// import Home from './mvvm/providers/Home';
// import Store from './mvvm/model/Store';

// let models = new Store();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Provider {...models.getStores()}>
      <Home />
  </Provider> */}
    <App />
  </React.StrictMode>
);




