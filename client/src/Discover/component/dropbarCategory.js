/* eslint-disable react/prop-types */
import {
  Box,
  Link,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function KategoriDropBar({ setDataCategory }) {
  const [category, setCategory] = useState();

  const dataCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/category-list");

      setCategory(response.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    dataCategory();
  }, []);

  return (
    <Box
      padding={"21px"}
      borderRadius="9px"
      background="#FFF"
      boxShadow="md"
      w={"272px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={3}
    >
      <Accordion allowToggle border={"transparent"}>
        <AccordionItem>
          <Text>
            <AccordionButton
              _hover={{
                bgColor: "transparent",
                borderColor: "transparent",
              }}
              _focus={{
                borderColor: "transparent",
                outline: "transparent",
              }}
            >
              <Box as="span" flex="1" textAlign="left">
                Kategori
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Text>
          <AccordionPanel pb={4} fontSize={"14px"}>
            <Link fontWeight={400} onClick={() => setDataCategory("")}>
              Semua Category
            </Link>
            {category?.map((data, index) => {
              return (
                <Box key={index}>
                  <Link
                    fontWeight={400}
                    onClick={() => setDataCategory(data.id)}
                  >
                    {data.categoryName}
                  </Link>
                </Box>
              );
            })}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
