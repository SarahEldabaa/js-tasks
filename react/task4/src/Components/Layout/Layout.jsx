import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import {ProductsContextProvider} from '../../ContextApis/ProductsContext';


const Layout = () => {
        return <>
                <Navbar/>
                <ProductsContextProvider>
                <Outlet />
                </ProductsContextProvider>
                </>

        
}

export default Layout;
