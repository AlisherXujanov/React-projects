import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Future of the world",
    description:
      "🤖The robots are coming and they are going to take over the world. We need to be prepared for the future.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "The more we work the more we get",
    description:
      "A platform for freelancers to find and get hired for remote jobs. 🔥️ ",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Different world",
    description:
      "The world is changing and we need to adapt to the new normal. 🌎 Also, we need to be prepared for the future.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Unique planet",
    description:
      "The aim of this project is to make the world a better place. 💹 We are going to change the world.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];


const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="indigo"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Best Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url=""
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;