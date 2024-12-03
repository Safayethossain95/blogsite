import React from "react";
import BoardOfDirectorsComp from "./BoardOfDirectorsSection";

const teamData = [
  {
    name: "John Doe",
    position: "Founder & CEO",
    description:
      "John is the visionary behind BlogMe, with a passion for connecting people through storytelling. With over 10 years of experience in the content industry, he leads the team with a commitment to excellence.",
  },
  {
    name: "Jane Smith",
    position: "Head of Content Strategy",
    description:
      "Jane brings a wealth of knowledge in content creation and strategy. With her eye for detail and deep understanding of digital marketing, she ensures BlogMe's content stays relevant and engaging for our audience.",
  },
  {
    name: "Alice Johnson",
    position: "Senior Editor",
    description:
      "Alice is a skilled editor with a knack for crafting compelling narratives. She is responsible for ensuring the highest standards of quality in every article published on BlogMe.",
  },
  {
    name: "David Brown",
    position: "Lead Writer",
    description:
      "David is a talented writer who excels in creating thought-provoking and insightful articles. With a strong background in technology and culture, he brings a unique perspective to BlogMe.",
  },
  {
    name: "Emily Clark",
    position: "Community Manager",
    description:
      "Emily is dedicated to building and maintaining a strong community around BlogMe. She manages our social media platforms and engages with readers to foster meaningful connections.",
  },
];

const TeamSection = () => {
  return (
    <section className=" my-10 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-semibold mb-8">Meet Our Team</h2>
        <BoardOfDirectorsComp/>
      </div>
    </section>
  );
};

export default TeamSection;
