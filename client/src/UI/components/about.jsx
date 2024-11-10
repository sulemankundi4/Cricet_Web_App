import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import batterImg from '../../assets/images/batter.jpg';
const About = () => {
  return (
    <>
      <section class="about-sec w-[94%] mt-18 mx-auto">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-2 order-lg-1">
              <div class="about-txt">
                <p class="lead text-success">Know About Us</p>
                <h2 class="sec-title line-left green">
                  Keep moving forward that’s how winning
                </h2>
                <p>
                  It’s not about how hard you hit, it’s about how hard you get
                  hit. Make your competitive juices overcome your excuses. The
                  price of greatness is responsibility. Champions are made when
                  no one is watching. Get the Cricket Habit
                </p>

                <ul className="my-5 space-y-2">
                  <li className="flex items-center">
                    <FaRegCheckCircle className="text-green-500 text-xl mr-2" />{' '}
                    Winners never quit and quitters never win
                  </li>
                  <li className="flex items-center">
                    <FaRegCheckCircle className="text-green-500 text-xl mr-2" />{' '}
                    No one is a failure until they stop trying
                  </li>
                  <li className="flex items-center">
                    <FaRegCheckCircle className="text-green-500 text-xl mr-2" />{' '}
                    Make your competitive juices overcome your excuses
                  </li>
                </ul>
                <a
                  href="#"
                  className="bg-[#EBE9A1] text-black rounded-full px-6 py-3 hover:bg-[#d4d29a] focus:outline-none transition duration-300"
                >
                  Learn More us
                </a>
              </div>
            </div>
            <div class="col-lg-6 ps-lg-5 order-1 order-lg-2 mb-5 mb-lg-0 col-sm-10">
              <div class="about-img position-relative text-center">
                <img class="img-fluid" src={batterImg} alt="" />
                <div class="d-sm-flex justify-content-between counter-wrap">
                  <div class="counter-card bg-dark p-4">
                    <div class="text-gr">
                      <span>10</span>K
                    </div>
                    <p>Years of Experience Recorded</p>
                  </div>
                  <div class="counter-card bg-dark p-4">
                    <div class="text-gr">
                      <span>50</span>+
                    </div>
                    <p>Skilled and Professional Trainers</p>
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
