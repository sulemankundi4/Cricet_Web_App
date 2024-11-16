import React from 'react';
import CricketImg1 from '../../assets/images/training.jpg';
import CricketImg2 from '../../assets/images/babar2.jpg';
import CricketImg3 from '../../assets/images/wasim.jpg';
import CricketImg4 from '../../assets/images/champion.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
      <section className="cricket-banner bg-dark position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="banner-txt text-center">
                <p className="lead text-gr">Cricket we love you</p>
                <h1 className="text-info text-uppercase text-2xl sm:text-3xl md:text-2xl lg:text-5xl">
                  Practice with a purpose play with a passion
                </h1>
                <Link
                  to="/sign-up"
                  className="bg-[#EBE9A1] text-black rounded-full px-6 py-3 hover:bg-[#d4d29a] focus:outline-none transition duration-300"
                >
                  Get Registered Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="banner-gallery">
        <div className="container-fluid">
          <div className="row g-3 gallery-wrap">
            <div className="col">
              <img
                className="h-[120px] w-[150px] md:h-[300px] md:w-[300px] sm:h-[250px] sm:w-[250px]"
                src={CricketImg1}
                alt="Cricket"
              />
            </div>
            <div className="col">
              <img
                className="h-[120px] w-[150px] md:h-[300px] md:w-[300px] sm:h-[250px] sm:w-[250px]"
                src={CricketImg2}
                alt="Cricket"
              />
            </div>
            <div className="col">
              <img
                className="h-[120px] w-[150px] md:h-[300px] md:w-[300px] sm:h-[250px] sm:w-[250px]"
                src={CricketImg3}
                alt="Cricket"
              />
            </div>
            <div className="col">
              <img
                className="h-[120px] w-[150px] md:h-[300px] md:w-[300px] sm:h-[250px] sm:w-[250px] "
                src={CricketImg4}
                alt="Cricket"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
