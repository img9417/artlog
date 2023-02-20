import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
  </Provider>,
)
