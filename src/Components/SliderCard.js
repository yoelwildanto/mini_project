import React from 'react';
import "../CSS/CardSlider.css"

import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
const ReactCardSlider =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    // console.log(props.slides)

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <div className='disc'>
                                <p className="slider-card-title">{slide.name}</p>
                                <p className="slider-card-date">{slide.date}</p>
                                <p className="slider-card-price">{slide.ticketPrice}</p>
                                </div>
                                <hr></hr>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;