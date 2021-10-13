import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h1>Best food waiting for your belly</h1>
        <br />
        <div className="input-container d-flex justify-content-center w-75 mx-auto">
          <input
            type="text"
            placeholder="Search food items"
            className="search-field rounded-pill w-100"
          />
          <button className="search-btn rounded-pill">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
