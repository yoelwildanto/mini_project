import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import SliderBanner from "../Components/SliderBanner";
import ReactCardSlider from "../Components/SliderCard";
import Footer from "./Footer";
import Axios from "axios";

const LandingPage = () => {
  // const sliderClick = (slider)=>{
  //     alert("hello world");
  //   }
  // const [data, setData] = useState([]);
  const [banner, setBanner] = useState([]);

  const data =[
    {
      id: 1,
      name: "Event 1",
      date: "2023-11-15",
      ticketPrice: "$25",
      description: "Company A",
      image: "../Asset/e.jpg"
    },
    {
      id: 2,
      name: "Event 2",
      date: "2023-12-10",
      ticketPrice: "$30",
      description: "Company B",
      image: "../Asset/b.jpg"
    },
    {
      id: 3,
      name: "Event 3",
      date: "2023-12-20",
      ticketPrice: "$20",
      description: "Company C",
      image: "../Asset/c.jpg"
    },
    {
      id: 4,
      name: "Event 4",
      date: "2023-12-25",
      ticketPrice: "$40",
      description: "Company D",
      image: "../Asset/d.jpg"
    },
    {
      id: 5,
      name: "Event 5",
      date: "2023-12-30",
      ticketPrice: "$35",
      description: "Company E",
      image: "../Asset/e.jpg"
    },
    {
      id: 6,
      name: "Event 6",
      date: "2024-01-05",
      ticketPrice: "$28",
      description: "Company F",
      image: "../Asset/f.jpg"
    }
  ]

 
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/events")
  //     .then((response) => {
  //       setData(response.data);
  //       // console.log(response.data)
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  useEffect(() => {
    Axios.get("http://localhost:3002/banner")
      .then((response) => {
        setBanner(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Box >
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
          fontSize={"20px"}
        >
          {" "}
          Upcoming Event{" "}
        </Text>
        <ReactCardSlider slides={data} />
      </Box>
      <Box borderRadius={"5px"} m={"80px 0px"} bg={"#032466"} p={"50px"}>
        <Text color={"white"} fontWeight={800} fontSize={"30px"}>
          {" "}
          Terlaris{" "}
        </Text>
        <ReactCardSlider slides={data} />
      </Box>

      <Box mt={"-20px"} mb={"50px"}>
        <Text
          ml={"15px"}
          display={"flex"}
          color={"black"}
          fontWeight={800}
          fontSize={"20px"}
        >
          {" "}
          Konser{" "}
        </Text>
        <ReactCardSlider slides={data} />
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
