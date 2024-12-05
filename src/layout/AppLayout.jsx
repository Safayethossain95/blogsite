/* eslint-disable react/prop-types */


import MyNavbar from '../components/MyNavbar';
import Footer from "../components/Footer";

const AppLayout = (props) => {
    return (
        <>
        <div className="div overflow-x-hidden">

            <MyNavbar/>
            {props.children}
            <Footer/>
       
        </div>
        </>
    );
};

export default AppLayout;