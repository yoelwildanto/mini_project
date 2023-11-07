import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/CardSlider.css";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Box } from "@chakra-ui/react";

const ReactCardSlider = (props) => {

  const [eventImage, setEventImage] = useState([]);

  const fetchEventImage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/event/list-all-event",
        {}
      );
      console.log(response.data.data);
      setEventImage(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEventImage();
  }, []);

  return (
    <Box>
      {/* <Text fontWeight={700} fontSize={"25px"} m={"10px 25px"} display={"flex"}>Upcoming Event</Text> */}
      <div id="main-slider-container">
        {/* <MdChevronLeft
          size={40}
          className="slider-icon left"
          onClick={slideLeft}
        /> */}
        <div id="slider">
          {eventImage.map((slide, index) => {
            console.log(eventImage)
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}/events/${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="disc">
                  <p className="slider-card-title">{slide.eventName}</p>
                  <p className="slider-card-date">{slide.startDate}</p>
                  <p className="slider-card-price">{slide.hargatiket}</p>
                </div>
                <hr></hr>
                {/* <p className="slider-card-description">{slide.description}</p> */}
              </div>
            );
          })}
        </div>
        {/* <MdChevronRight
          size={40}
          className="slider-icon right"
          onClick={slideRight}
        /> */}
      </div>
    </Box>
  );
};
export default ReactCardSlider;
