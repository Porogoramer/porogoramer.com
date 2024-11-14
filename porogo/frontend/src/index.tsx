import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
const About = lazy(() => import('./components/views/About'));
const Contact = lazy(() => import('./components/views/Contact'));
const Dashboard = lazy(() => import('./components/views/Dashboard'));
const Projects = lazy(() => import('./components/views/Projects'));
const ErrorPage = lazy(() => import('./components/views/ErrorPage'));
const Console = lazy(() => import('./components/views/Console'));
const Logs = lazy(() => import('./components/views/Logs'));
const Players = lazy(() => import('./components/views/Players'));
const Settings = lazy(() => import('./components/views/Settings'));
const Footer = lazy(() => import('./components/common/Footer'));
const Home = lazy(() => import('./components/views/Home'));
const Header = lazy(() => import('./components/common/Header'));
const Project = lazy(() => import('./components/views/Project'));
import '../static/styles/main.scss';

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