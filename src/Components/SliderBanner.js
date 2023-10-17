import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../CSS/SliderBanner.css"; 
import "../CSS/AutoSlider.css"
import banner1 from "../Asset/g.jpg"
import banner2 from "../Asset/b.jpg"
import banner3 from "../Asset/c.jpg"
import banner4 from "../Asset/d.jpg"
import banner5 from "../Asset/f.jpg"

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
      cssEase:"linear",
      prevArrow : <PrevArrow />,
      nextArrow : <NextArrow />,
    //   centerMode:true
    //   swipeToSilde: true,
    };
    // console.log(props.banners)

    const BANNER = [
      {
        id: 1,
      image: "../Asset/a.jpg"
      },
      {
        id: 2,
        image: "../Asset/b.jpg"
      }, 
      {
        id: 3,
        image: "../Asset/c.jpg"
      }, 
      {
        id: 4,
        image: "../Asset/d.jpg"
      },

      {
        id: 5,
        image: "../Asset/e.jpg"
      },
      {
        id: 6,
        image: "../Asset/f.jpg"
      },
      {
        id: 7,
        image: "../Asset/g.jpg"
      }
    ]
    console.log(BANNER)

  
    return (
      <div className="slider-banner">
        <Slider {...settings}>
            {
                // props.banners.map((a,index)=>{
                BANNER.map((a,index)=>{

                    // console.log(a.image)
                    return(
                        <div key={index}>
                        {/* <img src={require(`${a.image}`)} alt="Slide 1" /> */}
                        <img src={a.image} alt="Slide 1" />
                      </div>
                     )
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
  