import { Link } from "react-router-dom";


function Footer() {
  return (
<footer className="bg-gray-800 text-white py-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
    {/* Left Section - Company Info */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        <img src="/images/Logo/logo.png" alt="" />
      </h2>
      <p className="text-gray-400">
        Welcome to the ultimate source for fresh perspectives! Explore curated content to enlighten, entertain, and engage global readers.
      </p>
      
    </div>

    {/* Empty Column for Medium and Larger Screens */}
    <div className="hidden md:block"></div>

    {/* Right Section - Categories */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li><Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">Technology</Link></li>
        <li><Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">Travel</Link></li>
        <li><Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">Sport</Link></li>
        <li><Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">Business</Link></li>
      </ul>
    </div>

    {/* Middle Section - Homepages Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Homepages</h3>
      <ul className="space-y-2">
        <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About</Link></li>
        <li><Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">Blog</Link></li>
        <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">Service</Link></li>
        <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="text-center text-gray-500 mt-8 text-sm">
    © {new Date().getFullYear()} — BLOGME. All Rights Reserved.
  </div>
</footer>

  );
}

export default Footer;
