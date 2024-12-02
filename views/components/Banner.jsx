import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-screen h-[80vh] overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/DGSy3sr/pexels-markus-winkler-1430818-19.jpg')" }} // Replace with your image URL
          >
            {/* Content Wrapper */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between h-full">
              
              {/* Column 1 */}
              <div className="text-black text-center md:text-left mb-8 md:mb-0 md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Slider</h1>
                <p className="text-lg">
                  Explore amazing features with a dynamic, responsive layout.
                </p>
              </div>
              
              {/* Column 2 */}
              <div className="bg-white bg-opacity-80 p-6 rounded-lg md:w-1/2">
                <h2 className="text-gray-800 text-2xl font-bold mb-4">Additional Information</h2>
                <p className="text-gray-600">
                  This section adjusts its layout dynamically. It remains full-width on mobile and switches to a two-column layout on larger screens.
                </p>
              </div>
    
            </div>
          </div>
        </div>
      );
};

export default Banner;
