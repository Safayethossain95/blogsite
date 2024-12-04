import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800  p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold h-[40px]">
          <img className="h-full" src="/images/Logo/logo.png" alt="" />
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-gray-300 font-serif text-xl hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 font-serif text-xl hover:text-white">About</Link>
          <Link to="/blog" className="text-gray-300 font-serif text-xl hover:text-white">Blog</Link>
          <Link to="/services" className="text-gray-300 font-serif text-xl hover:text-white">Services</Link>
          <Link to="/contact" className="text-gray-300 font-serif text-xl hover:text-white">Contact</Link>
          <Link to="/login" className="text-gray-300 font-serif text-xl hover:text-white px-3 py-2 bg-blue-800 rounded-md">Login</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
        <div
         className={`md:hidden flex flex-column overflow-hidden transition-all duration-500 ease-in-out ${
           isOpen ? 'h-screen pt-[40px]' : 'h-0'
         }`}
       >
          <Link to="/" className="text-gray-300 hover:text-white font-serif">Home</Link>
          <Link to="/about" className="text-gray-300 font-serif hover:text-white">About</Link>
          <Link to="/blog" className="text-gray-300 font-serif hover:text-white">Blog</Link>
          <Link to="/services" className="text-gray-300  font-serif hover:text-white">Services</Link>
          <Link to="/contact" className="text-gray-300  font-serif hover:text-white">Contact</Link>
        </div>
     
    </nav>
  );
};

export default MyNavbar;
