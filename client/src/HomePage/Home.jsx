import axios from "axios";
import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import SliderBanner from "../Components/SliderBanner";
import ReactCardSlider from "../Components/SliderCard";
import Footer from "./Footer";

const LandingPage = () => {
  const [banner, setBanner] = useState([]);
  const [event, setAllEvents] = useState([]);

  const getAllEvents = async () => {
    try {
      const GET_EVENT = "http://localhost:8080/api/event";
      const response = await axios.get(GET_EVENT);
      setAllEvents(response.data);
    } catch (error) {
      return error;
    }
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:3002/banner")
      .then((response) => {
        setBanner(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    getAllEvents();
  }, []);

  return (
    <Box>
      {/* Slider Banner */}
      <SliderBanner banners={banner} />

      {/* Upcoming Event Slider Cards */}
      {/* <UpcomingEventSlider /> */}
      <Box mt={"40px"}>
        <Text
          ml={"15px"}
          display={"flex"}
          color={"black"}
          fontWeight={800}
          fontSize={"20px"}>
          {" "}
          Upcoming Event{" "}
        </Text>
        <ReactCardSlider slides={event} />
      </Box>
      <Box borderRadius={"5px"} m={"80px 0px"} bg={"#032466"} p={"50px"}>
        <Text color={"white"} fontWeight={800} fontSize={"30px"}>
          {" "}
          Terlaris{" "}
        </Text>
        <ReactCardSlider slides={event} />
      </Box>

      <Box mt={"-20px"} mb={"50px"}>
        <Text
          ml={"15px"}
          display={"flex"}
          color={"black"}
          fontWeight={800}
          fontSize={"20px"}>
          {" "}
          Konser{" "}
        </Text>
        <ReactCardSlider slides={event} />
      </Box>

      {/* List of Top 3 Bestsellers */}
      {/* <TopBestsellers /> */}

      {/* Discover Button */}
      {/* <DiscoverButton /> */}

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LandingPage;
