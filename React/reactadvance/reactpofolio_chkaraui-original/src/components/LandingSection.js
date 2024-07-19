import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const url = "https://i.pravatar.cc/150?img=7";
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="lg" src={url} />
      <Heading as="h1" size="xs">
        {greeting}
      </Heading>
      <Text fontSize="3xl" textAlign="center" maxWidth="600px" as="b">
        {bio1}
      </Text>
      <Text fontSize="3xl" textAlign="center" maxWidth="600px" as="b">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
