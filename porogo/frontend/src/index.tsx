import React, { lazy, Suspense } from 'react';
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
const Home = lazy(() => import('./components/views/Home'));
const AboutDev = lazy (()=> import('./components/views/AboutDev'))
import Footer from './components/common/Footer';
import Header from './components/common/Header';
const Project = lazy(() => import('./components/views/Project'));
import '../static/styles/main.scss';

const appDiv = document.getElementById('app')!;
const root = createRoot(appDiv);

/**
 * Component with Header, Footer that displays
 * another component within itself
 * @returns A div containing Header, Footer and an outlet for another component
 */
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
                element: <Suspense>
                    <Home/>
                </Suspense>,
            },
            {
                path: 'home',
                element: <Navigate to='/' replace/>,
            },
            {
                path: 'about',
                element: <Suspense>
                    <About />
                </Suspense>,
            },
            {
                path: 'about-dev',
                element: <AboutDev />,
            },
            {
                path: 'projects',
                element: <Suspense>
                    <Projects />
                </Suspense>,
            },
            {
                path: 'project',
                element: <Suspense>
                    <Project />
                </Suspense>,
            },
            {
                path: 'contact',
                element: <Suspense>
                    <Contact />
                </Suspense>,
            },
            {
                path: 'dashboard',
                element: <Suspense>
                    <Dashboard/>
                </Suspense>,
                children: [
                    {
                        path: 'console',
                        element: <Suspense>
                            <Console />
                        </Suspense>,
                    },
                    {
                        path: 'logs',
                        element: <Suspense>
                            <Logs />
                        </Suspense>,
                    },
                    {
                        path: 'players',
                        element: <Suspense>
                            <Players />
                        </Suspense>,
                    },
                    {
                        path: 'settings',
                        element: <Suspense>
                            <Settings />
                        </Suspense>
                    },            
                ]
            },
        ]
    },
]);

root.render(
    <RouterProvider router={router}/>
);