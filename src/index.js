import React from 'react'
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ApplicationReducer from './features/SendApplication'


export const store = configureStore({
  reducer: {
    applications: ApplicationReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>


  </React.StrictMode>
)
reportWebVitals();
