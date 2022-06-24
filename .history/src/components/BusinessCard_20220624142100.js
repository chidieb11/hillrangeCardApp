import React from "react";

const BusinessCard = () => {
  return (
    <div>
      <div className="flex flex-col m-auto justify-center shadow-md w-80 p-10">
        <div className="flex">
          <img
            className="w-20 object-cover mr"
            src="https://hillrangeschool.org.ng/wp-content/uploads/2019/01/HILLRANGESQUARE.jpg"
            alt=""
          />
          <div className="headerDetails">
            <h1>george group of companies</h1>
            <p>(real estate, oil and gas, maritime)</p>
            <p>
              plot 6-10A,Babasola drive, <br />
              maitama, abuja
            </p>
          </div>
        </div>
        <div className="motto">
          <span>motto:</span>your satisfacion is our priority
        </div>
        <div className="footer">
          <h3>
            Managing Director <br />
            George Amu <br />
            08033221100
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
