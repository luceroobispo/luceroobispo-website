import React from "react";
import ProjectCard from "./project-card";
const Projects = () => {
  const list = [
    {
      title: "Contacts List Mobile App",
      img: "/images/green-bg.png",
      type: "Android Kotlin",
      url: "https://github.com/luceroobispo/DemoCompose_CRUD",
    },
    {
      title: "Food Mobile App",
      img: "/images/green-bg.png",
      type: "Android Kotlin",
      url:"https://github.com/luceroobispo/SupeRestaurant",
    },
    {
      title: "SuperHeroe Mobile App",
      img: "/images/green-bg.png",
      type: "Android Kotlin",
      url:"https://github.com/luceroobispo/SuperHeroCompose",
    },
    {
      title: "TODO List Mobile App",
      img: "/images/purple-bg.png",
      type: "React Native",
      url:"https://github.com/luceroobispo/AndroidMobileProyects/tree/master/todoList-ReactNative",
    },
    {
      title: "Gather Videogame",
      img: "/images/blue-bg.png",
      type: "C++",
      url:"https://github.com/luceroobispo/Gather_Videogame",
    },
    {
      title: "Karnaugh Map",
      img: "/images/blue-bg.png",
      type: "C++",
      url:"https://github.com/luceroobispo/KarnaughMap_FinalProyect",
    },
    {
      title: "Maximum Flow",
      img: "/images/blue-bg.png",
      type: "C++",
      url:"https://github.com/luceroobispo/MaximumFlow_FinalProyect",
    },
    {
      title: "Humanitarian Aid",
      img: "/images/yellow-bg.png",
      type: "Python",
      url:"https://github.com/luceroobispo/AyudaHumanitaria_FinalProyect",
    },
    {
        title: "Disney Mobile App",
        img: "/images/orange-bg.png",
        type: "Flutter",
        url:"https://github.com/LuceroObispoRios/disney_flutter",
    },
    {
        title: "FriendFr Mobile App",
        img: "/images/orange-bg.png",
        type: "Flutter",
        url:"https://github.com/LuceroObispoRios/friendfr_flutter",
    },
    {
        title: "Rick and Morty Mobile App",
        img: "/images/orange-bg.png",
        type: "Flutter",
        url:"https://github.com/LuceroObispoRios/rick_morty_app",
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
