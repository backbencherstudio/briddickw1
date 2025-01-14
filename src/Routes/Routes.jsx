import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from '../pages/HomePage/Home/Home';
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            
        ]
    },
    {
        path: '*',
        element: <></>
    }
]);

export default router;