import  { useState } from 'react';
// import axios from 'axios';
// import { API_URL } from '../../config';
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

const LoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // const res = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
    // if(res.data.token){
    //   login()
    //   navigate("/dashboard")
    //   toast.success('Login Successful!');
    //   console.log("logged in")
    // }
  };
  

  return (
    <div className="flex justify-center items-center min-h-[700px] bg-gray-100">
  <form
    className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg"
    onSubmit={handleSubmit}
  >
    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h2>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-600">
        Email
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-sm font-medium text-gray-600">
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
    <button
      type="submit"
      className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Login
    </button>
  </form>
</div>

  );
};

export default LoginComp;
