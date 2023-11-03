import React from "react";
import {
  Box,
  Grid,
  GridItem,
  VStack,
  Flex,
  CardFooter,
  Button,
  Text,
  Divider,
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import Footer from "../HomePage/Footer";
import foto from "../Asset/h.jpg";
import { FilterColumn } from "./filterColumn";

const Discover = () => {
  return (
    <Box>
      <Grid className="discover-container" h={"100vh"} gridTemplateColumns={"300px auto"}>
        <GridItem borderRight={"0.5px solid #DCDCDC	"} bg={"white"}>
          <Box
            className="filter-container"
            boxShadow={"lg"}
            my={"50px"}
            p={"10px"}
          >
            <VStack>
              {/* <Flex> Filter</Flex>
              <Box> Lokasi </Box>
              <Box> Kategori</Box> */}
              <FilterColumn/>
            </VStack>
          </Box>
        </GridItem>
        <GridItem bg={"white"}>
          <Grid className="card-container" templateColumns="repeat(3, 1fr)" gap={6}>
            {/* card start */}
            <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={foto}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">LEvent 1</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter></CardFooter>
            </Card>
            </GridItem>
            {/* {card end} */}

            <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={foto}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">LEvent 1</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter></CardFooter>
            </Card>
            </GridItem>

            <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={foto}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">LEvent 1</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter></CardFooter>
            </Card>
            </GridItem>

            <GridItem>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src={foto}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">LEvent 1</Heading>

                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter></CardFooter>
            </Card>
            </GridItem>

          </Grid>
          {/* card end */}
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
};

export default Discover;
