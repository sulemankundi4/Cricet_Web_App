import React from 'react';
import CricketImg1 from '../../assets/images/crick1.jpg';
import CricketImg2 from '../../assets/images/crick2.jpg';
import CricketImg3 from '../../assets/images/crick3.jpg';
import CricketImg4 from '../../assets/images/crick4.jpg';
const Hero = () => {
  return (
    <>
      <section className="cricket-banner bg-dark position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="banner-txt text-center">
                <p className="lead text-gr">Cricket we love you</p>
                <h1 className="text-info text-uppercase">
                  Practice with a purpose play with a passion
                </h1>
                <button className="bg-[#EBE9A1] text-black rounded-full px-6 py-3 hover:bg-[#d4d29a] focus:outline-none transition duration-300">
                  Start Practice Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="banner-gallery">
        <div class="container-fluid">
          <div class="row g-3 gallery-wrap">
            <div class="col">
              <img class="img-fluid" src={CricketImg1} alt="Cricket" />
            </div>
            <div class="col">
              <img class="img-fluid" src={CricketImg2} alt="Cricket" />
            </div>
            <div class="col">
              <img class="img-fluid" src={CricketImg3} alt="Cricket" />
            </div>
            <div class="col">
              <img class="img-fluid" src={CricketImg4} alt="Cricket" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
