import React from "react";
import ProjectCard from "./project-card";
const Projects = () => {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <section className="font-['Open_Sans'] min-h-screen flex flex-col justify-center items-center bg-[#1B1B1B] py-16 px-10">
        <div className="flex justify-center">
            <h1 className="text-[30px] font-bold bg-[#2A2A2A] border-4 border-pink_dark2 text-pink_dark2 rounded-md py-3 px-10 my-10">
            MY PROJECTS
            </h1>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 w-full max-w-screen-lg">
            {list.map((item, index) => (
            <ProjectCard key={index} item={item} />
            ))}
        </div>
    </section>
  );
};

export default Projects;
