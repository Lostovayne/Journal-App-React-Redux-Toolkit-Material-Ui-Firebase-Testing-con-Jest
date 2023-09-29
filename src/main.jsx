import React from 'react';
import ReactDOM from 'react-dom/client';
import { JournalApp } from './JournalApp.jsx';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/*',
        element: <JournalApp />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
