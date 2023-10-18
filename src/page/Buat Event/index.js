import React from "react";
import {
  Box,
  VStack,
  Stack,
  Checkbox,
  Button,
  Image,
  Text,
  FormControl,
  Input,
  FormLabel,
  InputGroup,
  InputRightElement,
  Center,
  Spacer,
  Flex,
  Select,
} from "@chakra-ui/react";
import Footer from "../../HomePage/Footer";

export default function CreateEvent() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
      <Box
        p={"1.5em 3.5em"}
        minH={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={"transparent"}
      >
        <VStack w={"50%"} spacing={"1em"} align={"stretch"}>
          <Box>
            <Center>{/* <Image src={logo} w={"50%"} /> */}</Center>
          </Box>
          <Box bg={"pink"}>
            <Center>
              <Text as={"b"}>CREATE EVENT</Text>
            </Center>
          </Box>
          <Box>
            <FormControl isRequired>
              <Box>
                <FormLabel>Nama Event</FormLabel>
                <Input
                  bg={"#FAF9F6	"}
                  //   placeholder="Nama Event"
                  // borderColor={"black"}
                  // _placeholder={{ color: "black" }}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                ></Input>
              </Box>
              <Box my={"10px"}>
                <FormLabel>Tanggal</FormLabel>
                {/* <Input
                  placeholder="Tanggal Event"
                  borderColor={"black"}
                  _placeholder={{ color: "black" }}
                  _hover={{ borderColor: "white" }}
                  _focusVisible={{ borderColor: "white" }}
                ></Input> */}
                <Input
                  bg={"#FAF9F6"}
                  placeholder="Pilih Tanggal Event"
                  size="md"
                  type="date"
                />
              </Box>
              <Box>
                <Flex>
                  <Box w={"100%"}>
                    <FormLabel>Waktu Mulai</FormLabel>
                    <Input
                      bg={"#FAF9F6"}

                      // borderColor={"black"}
                      // _hover={{ borderColor: "white" }}
                      // _focusVisible={{ borderColor: "white" }}
                    />
                  </Box>
                  <Spacer m={".5em"} />
                  <Box w={"100%"}>
                    <FormLabel>Waktu Selesai</FormLabel>
                    <Input
                      bg={"#FAF9F6"}

                      // borderColor={"black"}
                      // _hover={{ borderColor: "white" }}
                      // _focusVisible={{ borderColor: "white" }}
                    />
                  </Box>
                </Flex>
                <Flex my={"10px"}>
                  <Box w={"100%"}>
                    {/* <FormLabel>Provinsi</FormLabel>
                  <Input
                  borderColor={"black"}
                  _hover={{ borderColor: "white" }}
                  _focusVisible={{ borderColor: "white" }}
                  />
                </Box>
                <Spacer m={".5em"} />
                <Box w={"100%"}>
                  <FormLabel>Kota</FormLabel>
                  <Input
                  borderColor={"black"}
                  _hover={{ borderColor: "white" }}
                  _focusVisible={{ borderColor: "white" }}
                  /> */}
                    <FormLabel>Kota</FormLabel>
                    <Select bg={"#FAF9F6"} placeholder="Pilih Kota">
                      <option>Bali</option>
                      <option>Bandung</option>
                      <option>Jakarta</option>
                      <option>Surabaya</option>
                      <option>Yogyakarta</option>
                    </Select>
                  </Box>
                </Flex>
                <Box>
                  <FormLabel>Lokasi</FormLabel>
                  <Input
                    bg={"#FAF9F6"}
                    placeholder="Lokasi Event"
                    // borderColor={"black"}
                    // _placeholder={{ color: "black" }}
                    // _hover={{ borderColor: "white" }}
                    // _focusVisible={{ borderColor: "white" }}
                  ></Input>
                </Box>
                <Box my={"10px"}>
                  <FormLabel>Kategori Tiket</FormLabel>
                  <Box display={"flex"} flexDir={"row"}>
                    <Checkbox colorScheme="green" defaultChecked>
                      Berbayar
                    </Checkbox>
                  </Box>
                  {/* <Spacer /> */}
                  <Box display={"flex"}>
                    <Checkbox colorScheme="green" defaultChecked>
                      Gratis
                    </Checkbox>
                  </Box>
                </Box>
                <Box>
                  <FormLabel>Deskripsi</FormLabel>
                  <Input
                    bg={"#FAF9F6	"}
                    placeholder="Deskripsi Event"
                    borderColor={"black"}
                    // _placeholder={{ color: "black" }}
                    _hover={{ borderColor: "white" }}
                    _focusVisible={{ borderColor: "white" }}
                  ></Input>
                </Box>
                <Box>
                  <FormLabel>Kategori</FormLabel>
                  <Select bg={"#FAF9F6"} placeholder="Pilih Kategori Event">
                    <option>Festival</option>
                    <option>Olahraga</option>
                    <option>Konser</option>
                    <option>Teater & Drama</option>
                    <option>Workshop</option>
                  </Select>
                </Box>
                <Box my={"10px"}>
                  <FormLabel>Harga Tiket</FormLabel>
                  <Input
                    bg={"#FAF9F6"}
                    placeholder="Masukkan Harga Tiket"
                    // borderColor={"black"}
                    // _placeholder={{ color: "black" }}
                    // _hover={{ borderColor: "white" }}
                    // _focusVisible={{ borderColor: "white" }}
                  ></Input>
                </Box>
                {/* <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  // borderColor={"black"}
                  // _placeholder={{ color: "black" }}
                  // _hover={{ borderColor: "white" }}
                  // _focusVisible={{ borderColor: "white" }}
                ></Input>
                <InputRightElement width="4em">
                  <Button size="xs" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup> */}
              </Box>
            </FormControl>
          </Box>
          <Box>
            <Center>
              <Button>Buat Tiket Event</Button>
            </Center>
          </Box>
        </VStack>
      </Box>
      <Footer />
    </Box>
  );
}
