import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const {
    handleSubmit,
    errors,
    touched,
    values,
    getFieldProps,
    resetForm,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      try {
        await submit(values);
        onOpen(response.type, response.message);
        resetForm();
      } catch (error) {
        onOpen(response.type, response.message);
      }
    },


    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(5, "name is too short min 5")
        .required("name is required"),
      email: Yup.string().email("invalid email").required("email is required"),
      comment: Yup.string()
        .min(5, "minmum of 5 charaters")
        .required("comment is required"),
    }),
  });

  const handleFocus = (field) => {
    setFieldTouched(field, false);
  };

  const isFormValid = () => {
    return (
      values.firstName &&
      values.email &&
      !errors.firstName &&
      !errors.email &&
      !errors.comment
    );
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={touched.firstName && errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onFocus={() => handleFocus("firstName")}
                  {...getFieldProps("firstName")}
                />
                <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={touched.email && errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onFocus={() => handleFocus("email")}
                  {...getFieldProps("email")}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...getFieldProps("type")}
                  className="custom-select"
                  // bg="lightpurple"
                >
                  <option value="hireMe" style={{ backgroundColor: "gray" }}>
                    Freelance project proposal
                  </option>
                  <option
                    value="openSource"
                    style={{ backgroundColor: "gray" }}
                  >
                    Open source consultancy session
                  </option>
                  <option value="other" style={{ backgroundColor: "gray" }}>
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl isInvalid={touched.comment && errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onFocus={() => handleFocus("comment")}
                  {...getFieldProps("comment")}
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
                isDisabled={!isFormValid()}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;