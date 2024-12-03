/* eslint-disable react/prop-types */

import {Toaster} from "react-hot-toast";
import MyNavbar from '../components/MyNavbar';
import Footer from "../components/Footer";

const AppLayout = (props) => {
    return (
        <>
        <div className="div overflow-x-hidden">

            <MyNavbar/>
            {props.children}
            <Footer/>
            <Toaster position="bottom-center"/>
        </div>
        </>
    );
};

export default AppLayout;