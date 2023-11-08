import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/CardSlider.css";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Box } from "@chakra-ui/react";

const ReactCardSlider = (props) => {
  const [eventImage, setEventImage] = useState([]);
  const navigate = useNavigate();

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
      <div id="main-slider-container">
        <div id="slider">
          {eventImage.map((slide, index) => {
            console.log(eventImage);
            return (
              <div
                className="slider-card"
                key={index}
                onClick={() => navigate(`/event/${slide.id}`)}
              >
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}/events/${slide.image}`}
                  className="slider-card-image"
                  style={{
                    src: `url(${process.env.REACT_APP_IMAGE_URL}/events/${slide.image})`,
                    backgroundSize: "cover",
                  }}
                ></img>
                <div className="disc">
                  <p className="slider-card-title">{slide.eventName}</p>
                  <p className="slider-card-date">
                    {new Date(slide?.startDate).toDateString()}
                  </p>
                  <p className="slider-card-price">
                    <FormatRupiah value={slide.hargatiket} />
                  </p>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};
export default ReactCardSlider;
