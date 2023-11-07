import React from "react";
import { Link } from "react-router-dom";
import "../CSS/CardSlider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Box } from "@chakra-ui/react";

const ReactCardSlider = (props) => {
  // const linkDetailEvent = `/event/${eventData.id}`;
  // const slideLeft = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };

  // const slideRight = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };

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
          {props.slides.map((slide, index) => {
            const linkDetailEvent = `/event/${slide.id}`;
            return (
              <div className="slider-card" key={index}>
                <div
                  className="slider-card-image"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                  }}></div>
                <div className="disc">
                  <Link to={linkDetailEvent}>
                    <p className="slider-card-title">{slide.name}</p>
                  </Link>
                  <p className="slider-card-date">{slide.date}</p>
                  <p className="slider-card-price">{slide.ticketPrice}</p>
                </div>
                <hr></hr>
                <p className="slider-card-description">{slide.description}</p>
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