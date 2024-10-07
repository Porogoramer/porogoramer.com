import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Dashboard from './components/views/Dashboard';
import Home from './components/views/Home';
import Projects from './components/views/Projects';
import ErrorPage from './components/views/ErrorPage';
import Console from './components/views/Console';
import Logs from './components/views/Logs';
import Players from './components/views/Players';
import Settings from './components/views/Settings';

const appDiv = document.getElementById('app')!;
const root = createRoot(appDiv);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'projects',
        element: <Projects />,
    },
    {
        path: 'contact',
        element: <Contact />,
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'dashboard/console',
                element: <Console />
            },
            {
                path: 'dashboard/logs',
                element: <Logs />
            },
            {
                path: 'dashboard/players',
                element: <Players />
            },
            {
                path: 'dashboard/settings',
                element: <Settings />
            },            
        ]
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);