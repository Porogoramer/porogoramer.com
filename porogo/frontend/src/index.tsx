import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/views/About';
import Contact from './components/views/Contact';
import Dashboard from './components/views/Dashboard';
import Projects from './components/views/Projects';
import ErrorPage from './components/views/ErrorPage';
import Console from './components/views/Console';
import Logs from './components/views/Logs';
import Players from './components/views/Players';
import Settings from './components/views/Settings';
import Footer from './components/common/Footer';
import Home from './components/views/Home';
import Header from './components/common/Header';
import '../static/styles/main.scss';
import Project from './components/views/Project';

const appDiv = document.getElementById('app')!;
const root = createRoot(appDiv);

function Main() {
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'',
                element: <Home/>,
            },
            {
                path: 'home',
                element: <Navigate to='/' replace/>,
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
                path: 'project',
                element: <Project />
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'dashboard',
                element: <Dashboard/>,
                children: [
                    {
                        path: 'console',
                        element: <Console />
                    },
                    {
                        path: 'logs',
                        element: <Logs />
                    },
                    {
                        path: 'players',
                        element: <Players />
                    },
                    {
                        path: 'settings',
                        element: <Settings />
                    },            
                ]
            },
        ]
    },
]);

root.render(
    <RouterProvider router={router}/>
);