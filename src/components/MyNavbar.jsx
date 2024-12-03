import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800  p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">BlogMe</div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
          <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
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
         className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
           isOpen ? 'h-screen pt-[40px]' : 'h-0'
         }`}
       >
          <a href="#home" className="block text-gray-300 hover:text-white p-2">Home</a>
          <a href="#about" className="block text-gray-300 hover:text-white p-2">About</a>
          <a href="#services" className="block text-gray-300 hover:text-white p-2">Services</a>
          <a href="#contact" className="block text-gray-300 hover:text-white p-2">Contact</a>
        </div>
     
    </nav>
  );
};

export default MyNavbar;
