import {
  Heading,
  Stack,
  Image,
  Text,
  Divider,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Card,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc }) => {
  return (
    <Card maxW="xs" borderRadius="md" overflow="hidden" boxShadow="md">
      <CardBody>
        <Image src={imageSrc} borderRadius="lg" />
        <Stack mt="4" spacing="6">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            as="a"
            href="#" // Replace "#" with the actual link
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
            variant="outline"
            colorScheme="teal"
          >
            Read More
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Cards;
