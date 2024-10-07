import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Dashboard from './components/views/Dashboard';
import Home from './components/views/Home';
import Projects from './components/views/Projects';

const appDiv = document.getElementById('app')!;
const root = createRoot(appDiv);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);