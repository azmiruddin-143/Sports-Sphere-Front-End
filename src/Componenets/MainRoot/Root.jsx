import React from 'react';
import Header from '../HomePages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../HomePages/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;