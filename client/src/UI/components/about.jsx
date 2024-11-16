import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import batterImg from '../../assets/images/batter.jpg';

const About = () => {
  return (
    <>
      <section className="about-sec w-[94%] mt-18 mx-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="about-txt">
                <p className="text-2xl font-extrabold text-success">
                  Know About Us
                </p>
                <h2 className="line-left green text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Where Talent Meets Opportunity
                </h2>
                <p>
                  At All Star Cricket Management we help cricketers achieve
                  their goals. We offer services like player management,
                  coaching, talent scouting, career guidance, sponsorships, and
                  league contracts. Our experts use data to improve player
                  performance and boost their online presence through social
                  media and website design. We work with top cricket
                  organizations to create opportunities for our clients. Our
                  mission is to support cricketers in reaching their full
                  potential, while doing business with integrity and passion.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 col-sm-10">
              <div className="about-img position-relative text-center">
                <img
                  className="img-fluid rounded-lg shadow-lg"
                  src={batterImg}
                  alt="Batter"
                />
                <div className="d-sm-flex justify-content-between counter-wrap mt-4">
                  <div className="counter-card bg-dark p-2 text-center rounded-lg shadow-lg">
                    <div className="text-gr text-2xl font-bold">
                      <span>10</span>K
                    </div>
                    <p className="text-white">Years of Experience Recorded</p>
                  </div>
                  <div className="counter-card bg-dark p-2 text-center rounded-lg shadow-lg sm:mt-0">
                    <div className="text-gr text-2xl font-bold">
                      <span>50</span>+
                    </div>
                    <p className="text-white">
                      Skilled and Professional Trainers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
