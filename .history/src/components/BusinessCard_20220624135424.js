import React from "react";

const BusinessCard = () => {
  return (
    <div className="">
      <div className="wrapper sm:flex sm:justify-center my-20">
        <div className="image">
          <img
            src="https://hillrangeschool.org.ng/wp-content/uploads/2019/01/HILLRANGESQUARE.jpg"
            alt=""
          />
        </div>
        <div className="textBody">
          <div>
            <h1 className="title">george group of campanies</h1>
            <p className="description">(real estate oil & gas, maritime)</p>
            <span>
              plot 6-10A, babasola drive, <br />
              maitama,abuja
            </span>
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
    </div>
  );
};

export default BusinessCard;
