// components/ProjectCard.tsx

'use client';

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface Item {
  title: string;
  img: string;
  price: string;
}

const ProjectCard: React.FC<{ item: Item }> = ({ item }) => {
  const handlePress = () => {
    console.log("item pressed");
  };

  return (
    <Card
      shadow="sm"
      isPressable
      onClick={handlePress}
      className="transition-transform transform hover:scale-105"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={item.title}
          className="w-full object-cover h-[140px]"
          src={item.img}
        />
      </CardBody>
      <CardFooter className="text-sm justify-between p-4">
        <b>{item.title}</b>
        <p className="text-gray-500">{item.price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
