import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import LokasiDropBar from "./component/dropbarLocation";
import KategoriDropBar from "./component/dropbarCategory";
import { DiscoveryCardEvent } from "./component/cardEvent";
// import { ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export const Discovery = () => {
  const [dataLocation, setDataLocation] = useState("");
  const [dataCategory, setDataCategory] = useState("");

  const ctgryID = sessionStorage.getItem("id");

  useEffect(() => {
    setDataCategory(ctgryID || "");
  }, []);

  return (
    <Box w={"100vw"} minH={"100vh"} bgColor={"#F3F3F3"}>

      <Box w={"full"} display={"flex"} pt={"90px"} flexDirection={"column"}>
        {/* <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          mb={"20px"}
          px={"40px"}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Discovery</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb> */}

        <Flex w={"full"} mb={"100px"} gap={"10"} justifyContent={"center"}>
          <Box display={"flex"} flexDirection={"column"} gap={5}>
            <LokasiDropBar setDataLocation={setDataLocation} />

            <KategoriDropBar setDataCategory={setDataCategory} />

          </Box>

          <DiscoveryCardEvent locationId={dataLocation} categoryId={dataCategory} />
        </Flex>
      </Box>

    </Box>
  );
};
