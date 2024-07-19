import React, { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default useSubmit = () => {
  const [isloading, setIsloading] = useState(false);
  const [response, setResponse] = useState(null);
  const submit = async (data) => {
    setIsloading(true);
    try {
      await wait(2000);
      if (Math.random > 0.5) {
        throw new Error("something went wrong");
      }
      setResponse({
        ...response,
        type: "sucess",
        message: `hello ${data.firstName} your data has been sent successfull`,
      });
    } catch (error) {
      setResponse({
        ...response,
        type: "error",
        message: "something went wrong",
      });
    } finally {
      setIsloading(false);
    }
  };
  return {
    submit,
    response,
    isloading,
  };
};
