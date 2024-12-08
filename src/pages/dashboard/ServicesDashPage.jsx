import axios from "axios";
import { useEffect, useState } from "react";
import AdminSidebar from "../../components/Dashboard/AdminSidebar";
import MyNavbar from "../../components/MyNavbar";
import { backendApi } from "../../config/config";
import toast from "react-hot-toast";

const ServicesDashPage = () => {
  const [data, setData] = useState([]);
  const [changeCount, setchangeCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [editmode, seteditmode] = useState(false);
  const [dynamictext,setdynamictext] = useState("Create Service")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
  });
  const editsubmit = async () => {
    try {
      const response = await axios.post(
        `${backendApi}/servicesupdate/${bnid}`,
        formData
      );
      console.log("Responsedat:", response.data.data);
      setchangeCount((p) => p + 1);
      setFormData({ title: "", description: "", category: "", image: "" });
      seteditmode(false);
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  useEffect(() => {
    async function callapi() {
      try {
        setLoading(true);
        const response = await axios.get(`${backendApi}/servicesget`);
        if(response.data){
          setData(response.data.data);

        }else{
          toast.error("Data not found")
        }
      } catch (error) {
        console.log("server not found",error);
      } finally {
        setTimeout(() => {
          setLoading(false); // Set loading to false after data fetch
        }, 1000); // Delay the loading message for 1 second
        // Set loading to false after data fetch
      }
    }
    callapi();
  }, [changeCount]);
  const [bnid, setbnid] = useState("");
  const edittoggle = async (item) => {
    try {
      setbnid(item._id);
      setFormData(item);
      seteditmode(true);
      setdynamictext("Edit Service")
      //   setData(response.data);
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const handledelete = async (myid) => {
    try {
      console.log(myid)
      const response = await axios.delete(`${backendApi}/servicesdelete/${myid}`);
      console.log("Response:", response.data.data);
      setchangeCount((p) => p + 1); // Handle the response
    } catch (error) {
      console.error("Error deleting data:", error); // Handle any errors
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendApi}/servicespost`, formData);
      setFormData({
        title: "",
        description: "",
        category: "",
        image: "",
      });
      setchangeCount((p) => p + 1);
      // Handle the response if needed
      console.log(response.data);
    } catch (error) {
      // Handle any errors
      console.error("Error submitting form:", error);
    } // Handle form submission logic here
  };
  return (
    <>
      <div className="leftsidebardash">
        <MyNavbar />
        <AdminSidebar />
      </div>

      <div className="content_add">
      <h3 className="text-2xl font-serif text-center mb-[50px]">Services Edit</h3>
        <table className="table-auto border-collapse border border-gray-400 w-full m-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5">
                  <div
                    style={{
                      height: "400px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src="/images/loading/loading.svg" alt="Loading..." />
                  </div>
                </td>
              </tr>
            ) : (
              data?.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item?.title}</td>
                  <td className="border px-4 py-2">{item?.description}</td>
                  <td className="border px-4 py-2">
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => edittoggle(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handledelete(item._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <form>
          {/* Title Field */}
          <div className="text-center">
            <h3>{dynamictext}</h3>
          </div>
          <div>
            <label className="font-serif">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="font-serif">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

         
          {/* Submit Button */}
          {editmode ? (
            <button type="button" onClick={editsubmit}>
              <a className="rounded-md bg-blue-500 block text-white py-2">
                Edit
              </a>
            </button>
          ) : (
            <button onClick={handleSubmit} className="w-100">
              <a className="rounded-md bg-blue-500 block text-white py-2">
                Submit
              </a>
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default ServicesDashPage;
