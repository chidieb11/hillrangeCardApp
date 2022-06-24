import React from "react";

const BusinessCard = () => {
  return (
    <div className="">
      <div className="wrapper w-80" style={{ border: "1px solid black" }}>
        <div className="sm:flex sm:justify-between grid grid-cols-1 ml-10">
          <div className="image">
            <img
              src="https://hillrangeschool.org.ng/wp-content/uploads/2019/01/HILLRANGESQUARE.jpg"
              alt=""
            />
          </div>
          <div className="">
            <h1 className="title capitalize text-4xl">
              george group of campanies
            </h1>
            <p className="description">(real estate oil & gas, maritime)</p>
            <span>
              plot 6-10A, babasola drive, <br />
              maitama,abuja
            </span>
          </div>
        </div>
        <div className="motto">motto: your satisfaction is our priority</div>
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