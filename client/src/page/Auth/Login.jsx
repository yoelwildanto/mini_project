import {
  Box,
  Button,
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Actions/auth";

function Login() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      dispatch(login(values.email, values.password))
        .then(() => {
          navigate("/");
          window.location.reload();
        })
        .catch((e) => {
          return e;
        });
    },
  });

  return (
    <Box
      w="40%"
      position="absolute"
      ml="500px"
      mt="200px"
      border="2px solid gray"
      borderRadius="20px">
      <Box w="full" p={8}>
        <Heading>Login</Heading>
        <form onSubmit={formik.handleSubmit}>
          <FormLabel>Email: </FormLabel>
          <FormControl
            isInvalid={formik.touched.email && formik.errors.email}
            mb={5}>
            <InputGroup>
              <Input
                size="lg"
                type="text"
                name="email"
                placeholder="Your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </InputGroup>
            {formik.touched.email && formik.errors.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormLabel>Password: </FormLabel>
          <FormControl
            isInvalid={formik.touched.password && formik.errors.password}
            mb={5}>
            <InputGroup>
              <Input
                size="lg"
                type="password"
                name="password"
                placeholder="Your password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </InputGroup>
            {formik.touched.password && formik.errors.password && (
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit">Login</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
