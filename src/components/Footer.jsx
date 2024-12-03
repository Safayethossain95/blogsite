

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
      {/* Social Icons */}
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>

    {/* Empty Column for Medium and Larger Screens */}
    <div className="hidden md:block"></div>

    {/* Right Section - Categories */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Technology</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Travel</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Sport</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Business</a></li>
      </ul>
    </div>

    {/* Middle Section - Homepages Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Homepages</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Service</a></li>
        <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
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
