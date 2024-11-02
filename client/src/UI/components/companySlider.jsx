import React from 'react';
import brandOne from '../../assets/images/brg1.png';
import brandOneHover from '../../assets/images/brg1-hover.png';
import brandTwo from '../../assets/images/brg2.png';
import brandTwoHover from '../../assets/images/brg2-hover.png';
import brandThree from '../../assets/images/brg3.png';
import brandThreeHover from '../../assets/images/brg3-hover.png';
import brandFour from '../../assets/images/brg4.png';
import brandFourHover from '../../assets/images/brg4-hover.png';

const CompanySlider = () => {
  return (
    <div className="brand2-sec bg-white py-8 m-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <div className="single-brand p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img
              className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
              src={brandOneHover}
              alt="Brand"
            />
          </div>
          <div className="single-brand p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img
              src={brandTwoHover}
              alt="Brand"
              className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
            />
          </div>
          <div className="single-brand p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img
              src={brandThreeHover}
              alt="Brand"
              className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
            />
          </div>
          <div className="single-brand p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img
              className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
              src={brandFourHover}
              alt="Brand"
            />
          </div>
          <div className="single-brand p-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img
              className="w-full h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px]"
              src={brandOneHover}
              alt="Brand"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySlider;
