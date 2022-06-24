import React from "react";

const BusinessCard = () => {
  return (
    <div>
      <div className="flex flex-col m-auto justify-center shadow-md w-96 p-3 mt-20">
        <div className="flex justify-between">
          <img
            className="w-20 object-cover"
            src="https://hillrangeschool.org.ng/wp-content/uploads/2019/01/HILLRANGESQUARE.jpg"
            alt=""
          />
          <div className="headerDetails mt-2 sm:ml-4 mb-10 text-center">
            <h1 className="uppercase whitespace-nowrap text-xl font-bold">
              george group of companies
            </h1>
            <p>(real estate, oil and gas, maritime)</p>
            <p>
              plot 6-10A,Babasola drive, <br />
              maitama, abuja
            </p>
          </div>
        </div>
        <div className="motto mb-10 text-center capitalize">
          <span className="font-bold capitalize mr-2">motto:</span> your
          satisfacion is our priority
        </div>
        <div className="footer flex justify-end">
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
