import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
// import "../CSS/SliderBanner.css";
import "../CSS/AutoSlider.css";
import { PrevArrow, NextArrow } from "./Arrow";

const SliderBanner = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    //   centerMode:true
    //   swipeToSilde: true,
  };
  // console.log(props.banners)

  const BANNER = [
    {
      id: 1,
      image:
        "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1691575224_AGeMc8.jpg",
    },
    {
      id: 2,
      image:
        "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1694850845_x0hYtf.jpg",
    },
    {
      id: 3,
      image: "../Asset/g.jpg",
    },
    {
      id: 4,
      image:
        "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1698911819_5wCxBt.jpg",
    },

    {
      id: 5,
      image:
        "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1698911819_5wCxBt.jpg",
    },
    {
      id: 6,
      image:
        "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1691575224_AGeMc8.jpg",
    },
    {
      id: 7,
      image:
        "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1694850845_x0hYtf.jpg",
    },
  ];

  const [eventImage, setEventImage] = useState([]);

  const fetchEventImage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/event/banner",
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
    <div className="slider-banner">
      <Slider {...settings}>
        {
          // props.banners.map((a,index)=>{
            eventImage.map((a, index) => {
            // console.log(a.image)
            return (
              <div key={index}>
                {/* <img src={require(`${a.image}`)} alt="Slide 1" /> */}
                <img src={`${process.env.REACT_APP_IMAGE_URL}/events/${a?.image}`} alt="Slide 1" />
              </div>
            );
          })
        }
      </Slider>
    </div>
  );

  //     return(
  //         <div className="slider-banner">
  //         <Slider {...settings}>
  //             <div>
  //                 <img src={banner1} alt="Slide 1" />
  //             </div>
  //             <div>
  //                 <img src={banner2} alt="Slide 1" />
  //             </div>    <div>
  //                 <img src={banner3} alt="Slide 1" />
  //             </div>    <div>
  //                 <img src={banner4} alt="Slide 1" />
  //             </div>    <div>
  //                 <img src={banner5} alt="Slide 1" />
  //             </div>

  //         </Slider>
  //       </div>
  //     )
};

export default SliderBanner;
