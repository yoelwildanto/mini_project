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
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const register = async (email, username, password) => {
    try {
      const { data } = await axios.post("http://localhost:8080/auth/register", {
        email,
        username,
        password,
      });
      alert(data?.message);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      roles: "",
      password: "",
    },
    onSubmit: (values) => {
      register(values.email, values.username, values.roles, values.password);
    },
  });

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
          <FormLabel>Username: </FormLabel>
          <FormControl
            isInvalid={formik.touched.username && formik.errors.username}
            mb={5}>
            <InputGroup>
              <Input
                size="lg"
                type="text"
                name="username"
                placeholder="Your username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </InputGroup>
            {formik.touched.username && formik.errors.username && (
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            )}
          </FormControl>
          <FormLabel>Roles: </FormLabel>
          <FormControl
            isInvalid={formik.touched.roles && formik.errors.roles}
            mb={5}>
            <Select
              size="lg"
              type="text"
              name="roles"
              placeholder="Your roles"
              value={formik.values.roles}
              onChange={formik.handleChange}>
              <option>EO</option>
              <option>User</option>
            </Select>
            {formik.touched.roles && formik.errors.roles && (
              <FormErrorMessage>{formik.errors.roles}</FormErrorMessage>
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
