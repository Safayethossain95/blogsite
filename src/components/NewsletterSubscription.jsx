import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { backendApi } from "../config/config";


function NewsletterSubscription() {

  const [email,setemail] = useState("")

  const handlesubscribe = async () => {
    try {
      const res = await axios.post(`${backendApi}/subscribe`, { "email":email });  // Correct object format
      if (res.data.success) {
        toast.success("Subscribed!");
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error("Error: " + (error.response?.data?.message || "Request failed"));
    }
  };
  

  return (
    <div className="bg-white p-8 rounded-lg  text-center max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-black mb-4">Subscribe to our Newsletter</h2>
      <p className="text-gray-700 mb-6">
        Subscribe to our email newsletter to get the latest posts delivered right to your email.
      </p>
      <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
        <input
        value={email}
        onChange={(e)=>setemail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="w-full px-4 py-3 text-black focus:outline-none"
        />
        <button onClick={
          handlesubscribe
        } className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
          Subscribe
        </button>
      </div>
      <p className="text-gray-500 text-sm mt-4">
        Pure inspiration, zero spam ✨
      </p>
    </div>
  );
}

export default NewsletterSubscription;
