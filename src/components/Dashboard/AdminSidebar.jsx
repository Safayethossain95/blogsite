/* eslint-disable no-unused-vars */
import "../../scss/admin.scss"
import React, {  useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
const AdminSidebar = () => {
    const location = useLocation();
    const [isJobEntryOpen, setJobEntryOpen] = useState(true);
    const [isstudentdrpOpen, setisstudentdrpOpen] = useState(true);
    const [isHomepagedrpOpen, setisHomepagedrpOpen] = useState(true);
    const [isAboutpagedrpOpen, setisAboutpagedrpOpen] = useState(true);
    const [isProductpagedrpOpen, setisProductpagedrpOpen] = useState(true);
    const [isServicepagedrpOpen, setisServicepagedrpOpen] = useState(true);

    const toggleServiceEntry = () => {
        setisServicepagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleProductEntry = () => {
        setisProductpagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleAboutEntry = () => {
        setisAboutpagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleJobEntry = () => {
        setJobEntryOpen((prevOpen) => !prevOpen);
    };
    const toggleHomeEntry = () => {
        setisHomepagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleStudentEntry = () => {
        setisstudentdrpOpen((prevOpen) => !prevOpen);
    };
    const [userid,setuserid] = useState("")
    // const {myApi} = useContext(MyContext)
    // useEffect(() => {
    //     const mail = localStorage.getItem("user");
    //     async function getuser() {
    //         try {
    //             const response2 = await axios.get(`${myApi}/api/getuser/${mail}`);
    //             setuserid(response2.data.data._id);
    //         } catch (err) {
    //             console.log(err.message);
    //         }
    //     }
    //     getuser();
    // }, []);
    return (
        <>
            <div className="sidebar_add">
                <div className="sidebarcomp">
                    <ul>
                     
                        <li className={`drp ${isJobEntryOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleJobEntry}>
                                <Link>CRUD OPERATIONS</Link>
                                <img
                                    style={
                                        isJobEntryOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className={
                                            location.pathname == "/dashboard" ? "active" : ""
                                        }
                                    >
                                        Blogs Edit
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/teams"
                                        className={
                                            location.pathname == "/dashboard/teams" ? "active" : ""
                                        }
                                    >
                                        Teams Edit
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard/services"
                                        className={
                                            location.pathname == "/dashboard/services" ? "active" : ""
                                        }
                                    >
                                        Services Edit
                                    </Link>
                                </li>
                      
                                
                            </ul>

                        </li>
                       
                   
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar