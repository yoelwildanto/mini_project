import React from "react";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className + " slick-arrow slick-prev"} onClick={onClick}>
      &lt;
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className + " slick-arrow slick-next"} onClick={onClick}>
      &gt;
    </button>
  );
};

export { PrevArrow, NextArrow };
