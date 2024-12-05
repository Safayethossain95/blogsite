import axios from "axios";
import { useEffect, useState } from "react";
import { backendApi } from "../../config/config";

const servicesData = [
  {
    
    "title": "Content Writing 2",
    "description": "We create high-quality blog content that resonates with your audience, helping you build authority in your niche.",
    
    
  },
  {
    
    "title": "SEO Optimization",
    "description": "Our SEO experts ensure your content ranks higher on search engines, driving more organic traffic to your blog.",
    
    
  },
  {
    
    "title": "Social Media Promotion",
    "description": "Promote your blog content across social media platforms to increase visibility and engagement with your audience.",
    
    
  },
  {
    
    "title": "Blog Design",
    "description": "We design beautiful, responsive blog themes that enhance the user experience and keep your readers engaged.",
    
    
  },
  {
    
    "title": "Email Marketing",
    "description": "Use email marketing to keep your audience engaged with regular updates, newsletters, and exclusive content.",
    
    
  },
  {
    
    "title": "Analytics & Reporting",
    "description": "We provide detailed analytics and reports to track your blog’s performance, helping you make data-driven decisions.",
    
    
  }
];

const ServiceSection = () => {

  const [data,setData] = useState(servicesData)
  useEffect(() => {
    async function callapi() {
      try {
        const response = await axios.get(`${backendApi}/servicesget`);
        
        console.log(response.data);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    callapi();
  }, []);
  return (
    <section className=" py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Blogging Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {data.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
