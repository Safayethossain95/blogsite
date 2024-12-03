

const Blog = () => {
    const blogData = [
        {
          "id": 1,
          "image": "/images/Blog/blog1.jpg",
          "title": "Exploring the Mountains",
          "description": "Discover the breathtaking beauty of mountain ranges and the adventure they offer.",
          "category": "Traveling"
        },
        {
          "id": 2,
          "image": "/images/Blog/blog2.jpeg",
          "title": "The Art of Cooking",
          "description": "Learn about cooking techniques and explore delightful recipes from around the world.",
          "category": "Food & Cuisine"
        },
        {
          "id": 3,
          "image": "/images/Blog/blog3.jpg",
          "title": "Tech Trends 2024",
          "description": "Stay ahead with insights into the latest technology trends shaping the future.",
          "category": "Technology"
        },
        {
          "id": 4,
          "image": "/images/Blog/blog4.jpg",
          "title": "City Lights and Life",
          "description": "Experience the vibrant energy of bustling city streets and iconic landmarks.",
          "category": "City Life"
        },
        {
          "id": 5,
          "image": "/images/Blog/blog5.jpeg",
          "title": "Capturing Moments",
          "description": "Explore the art of photography and the magic of capturing timeless moments.",
          "category": "Photography"
        },
        {
          "id": 6,
          "image": "/images/Blog/blog6.jpeg",
          "title": "Mindful Meditation",
          "description": "Find peace and balance with simple yet effective meditation practices.",
          "category": "Wellness"
        }
      ]
      return (
        <div className="container mx-auto flex justify-between items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-6">
          {blogData.map((item) => (
            <div key={item.id} className="bg-white hover:scale-105 duration-300 shadow-lg rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href={item.link} className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600 duration-300 cursor-pointer transition">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      );
}

export default Blog