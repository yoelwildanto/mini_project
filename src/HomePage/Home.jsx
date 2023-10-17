import React, {useState,useEffect} from "react";
import { Box, Text } from "@chakra-ui/react";
import SliderBanner from "../Components/SliderBanner";
import ReactCardSlider from "../Components/SliderCard";
import Footer from "./Footer";
// import Navbar from "../Components/Navbar";
import Axios from "axios";

const LandingPage = () => {
    // const sliderClick = (slider)=>{
    //     alert("hello world");
    //   }
      const [data, setData] = useState([]);
      const [banner, setBanner] = useState([]);

    // const slides = [
    //     {image:"https://picsum.photos/200/300",title:"This is a title",description:"This is a description",clickEvent:sliderClick},
    //     {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
    //     {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
    //     {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
    //     {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
    //     {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
    //     {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    //   ]
      useEffect(() => {
        Axios.get('http://localhost:3001/events')
          .then((response) => {
            setData(response.data); 
            // console.log(response.data)
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

      useEffect(() => {
        Axios.get('http://localhost:3002/banner')
          .then((response) => {
            setBanner(response.data); 
            // console.log(response.data)
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <Box padding={"10px"}>
      {/* Slider Banner */}
      <SliderBanner banners={banner} />

      {/* Upcoming Event Slider Cards */}
      {/* <UpcomingEventSlider /> */}
      <Box mt={"20px"}>
      <Text ml={"15px"} display={"flex"} color={"black"} fontWeight={800} fontSize={"20px"}> Upcoming Event </Text>
      <ReactCardSlider slides={data}/>
      </Box>
      <Box borderRadius={"5px"} m={"80px 5px"} bg={"#032466"} p={"50px"}>
        <Text color={"white"} fontWeight={800} fontSize={"30px"}> Terlaris </Text>
      <ReactCardSlider slides={data}/>
      </Box>

      <Box mt={"-20px"}>
      <Text ml={"15px"} display={"flex"} color={"black"} fontWeight={800} fontSize={"20px"}> Konser </Text>
      <ReactCardSlider slides={data}/>
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
