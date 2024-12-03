
import { FaLaptop, FaPlane, FaFootballBall, FaBriefcase, FaChartBar, FaFire, FaRocket, FaNewspaper } from "react-icons/fa";

const topics = [
  { name: "Technology", icon: <FaLaptop /> },
  { name: "Travel", icon: <FaPlane /> },
  { name: "Sport", icon: <FaFootballBall /> },
  { name: "Business", icon: <FaBriefcase /> },
  { name: "Management", icon: <FaChartBar /> },
  { name: "Trends", icon: <FaFire /> },
  { name: "Startups", icon: <FaRocket /> },
  { name: "News", icon: <FaNewspaper /> },
];

function TrendingTopics() {
  return (
    <div className="bg-white p-8 rounded-lg text-center max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-black mb-6">Explore Trending Topics</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-black px-5 py-3 rounded-full shadow-md transition-all duration-300 cursor-pointer">
            {topic.icon}
            <span className="font-semibold">{topic.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingTopics;
