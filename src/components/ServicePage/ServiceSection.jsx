
const servicesData = [
  {
    "id": 1,
    "title": "Content Writing",
    "description": "We create high-quality blog content that resonates with your audience, helping you build authority in your niche.",
    "icon": "fas fa-pencil-alt",
    "color": "text-blue-600"
  },
  {
    "id": 2,
    "title": "SEO Optimization",
    "description": "Our SEO experts ensure your content ranks higher on search engines, driving more organic traffic to your blog.",
    "icon": "fas fa-search",
    "color": "text-green-600"
  },
  {
    "id": 3,
    "title": "Social Media Promotion",
    "description": "Promote your blog content across social media platforms to increase visibility and engagement with your audience.",
    "icon": "fas fa-share-alt",
    "color": "text-red-600"
  },
  {
    "id": 4,
    "title": "Blog Design",
    "description": "We design beautiful, responsive blog themes that enhance the user experience and keep your readers engaged.",
    "icon": "fas fa-paint-brush",
    "color": "text-yellow-600"
  },
  {
    "id": 5,
    "title": "Email Marketing",
    "description": "Use email marketing to keep your audience engaged with regular updates, newsletters, and exclusive content.",
    "icon": "fas fa-envelope",
    "color": "text-purple-600"
  },
  {
    "id": 6,
    "title": "Analytics & Reporting",
    "description": "We provide detailed analytics and reports to track your blog’s performance, helping you make data-driven decisions.",
    "icon": "fas fa-chart-line",
    "color": "text-indigo-600"
  }
];

const ServiceSection = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Blogging Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="mb-6">
                <i className={`${service.icon} text-4xl ${service.color}`}></i>
              </div>
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
