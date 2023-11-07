import {
  Box,
  Button,
  Input,
  InputGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../Actions/auth";

function Register() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      password: "",
      roleId: "",
    },
    onSubmit: (values) => {
      dispatch(
        register(values.email, values.fullname, values.password, values.roleId)
      )
        .then(() => {
          window.location.reload();
          navigate("/");
        })
        .catch((e) => {
          return e;
        });
    },
  });

  const [roles, setRoles] = useState([]);
  const getRoles = async () => {
    try {
      const GET_ROLES = "http://localhost:8080/api/auth/roles";
      const response = await axios.get(GET_ROLES);
      setRoles(response.data);
    } catch (error) {
      return error;
    }
  };

  React.useEffect(() => {
    getRoles();
  }, []);

  return (
    <Box
      w="40%"
      position="absolute"
      ml="500px"
      mt="130px"
      border="2px solid gray"
      borderRadius="20px">
      <Box w="full" p={8}>
        <Heading>Register</Heading>
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
                placeholder="Email "
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </InputGroup>
            {formik.touched.email && formik.errors.email && (
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )}
          </FormControl>
          <FormLabel>Fullname: </FormLabel>
          <FormControl
            isInvalid={formik.touched.fullname && formik.errors.fullname}
            mb={5}>
            <InputGroup>
              <Input
                size="lg"
                type="text"
                name="fullname"
                placeholder="Your Fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
              />
            </InputGroup>
            {formik.touched.fullname && formik.errors.fullname && (
              <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
            )}
          </FormControl>
          <FormLabel>Roles: </FormLabel>
          <FormControl
            isInvalid={formik.touched.roleId && formik.errors.roleId}
            mb={5}>
            <Select
              size="lg"
              type="text"
              name="roleId"
              placeholder="Your Roles"
              value={formik.values.roleId}
              onChange={formik.handleChange}>
              {roles.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </Select>
            {formik.touched.roleId && formik.errors.roleId && (
              <FormErrorMessage>{formik.errors.roleId}</FormErrorMessage>
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
          <Button type="submit">Register</Button>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
