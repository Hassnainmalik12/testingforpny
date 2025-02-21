import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import UdhaarBook from "./redux/UdhaarBook/UdhaarBook";
import FormValidation from "./redux/Form_Validation/FormValidation";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Main from "./redux/navigation_controller/Main";
import Contact from "./redux/navigation_controller/Contact";

const route = createHashRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/contact", element: <Contact /> }
        ]
    }
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <RouterProvider router={route} />
    </Provider>
);
