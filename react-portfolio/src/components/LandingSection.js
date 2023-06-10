import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Myself from "../images/Myself.jpg";

const greeting = "Hello, I am Alisher!";
const bio1 = "A Fullstack Developer";
const bio2 = "A passionate learner and a problem solver";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#512DA8"
  >
    {/* The UI for the landing section */}
    <VStack spacing={16}>
      <VStack spacing={4}>
        <Avatar
          src={Myself}
          size="2xl"
          name="Rohit Kumar"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading as="h1" size="3xl" noOfLines={1} >
          {bio1}
        </Heading>
        <Heading as="h3" size="3xl" noOfLines={1} >
          {bio2}
        </Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;
