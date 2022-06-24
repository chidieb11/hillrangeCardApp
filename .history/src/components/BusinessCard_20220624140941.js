import React from "react";

const BusinessCard = () => {
  return (
    <div className="">
      <div className="wrapper mt-10 sm:ml-80">
        <div className="sm:flex grid grid-cols-1">
          <div className="image">
            <img
              className="w-full"
              src="https://hillrangeschool.org.ng/wp-content/uploads/2019/01/HILLRANGESQUARE.jpg"
              alt=""
            />
          </div>
          <div className="sm:ml-10 text-center mt-10">
            <h1 className="title capitalize text-4xl">
              george group of campanies
            </h1>
            <p className="description capitalize">
              (real estate oil & gas, maritime)
            </p>
            <span className="capitalize">
              plot 6-10A, babasola drive, <br />
              maitama, abuja
            </span>
          </div>
        </div>
        <div className="motto text">motto: your satisfaction is our priority</div>
        <div className="footer">
          <h4>
            managing director <br />
            george amu <br /> 08033221100
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
