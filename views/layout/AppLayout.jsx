import React from 'react';
import {Toaster} from "react-hot-toast";
import MyNavbar from '../components/MyNavbar';

const AppLayout = (props) => {
    return (
        <>
            <MyNavbar/>
            {props.children}
            <Toaster position="bottom-center"/>
        </>
    );
};

export default AppLayout;