import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
const Layout = () => {
    return (
        <div className='min-h-screen'>
            <Header />
            <Outlet />
            <ScrollRestoration />
            <Footer />
        </div>
    );
};

export default Layout;