import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import batterImg from '../../assets/images/batter.jpg';
import About from '../components/about';
import PlayerProfile from '../components/playerProfile';
import bgImg from '../../assets/images/sydney3.jpg';
import { FaPhone } from 'react-icons/fa6';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const LandingPage = () => {
  const [batsman, setBatsman] = useState([]);

  useEffect(() => {
    const fetchBatsmen = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/featured/all',
        );
        console.log(response);
        if (response.data.success) {
          const verifiedBatsmen = response.data.data.filter(
            (batsman) => batsman.accountStatus === true,
          );
          setBatsman(verifiedBatsmen);
        } else {
          console.error('Error fetching batsmen:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching batsmen:', error);
      }
    };

    fetchBatsmen();
  }, []);
  return (
    <>
      <section className="bg-white">
        <Navbar />
        <Hero />
        <About />
        <PlayerProfile batsman={batsman} />

        <div
          className="video-sec jarallax  bg-center flex items-center justify-center mt-20"
          style={{
            backgroundImage: `url('${bgImg}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>

        <section className="cta-sec2 sec-padding bg-success">
          <div className="container">
            <div className="row g-0 align-items-center">
              <div className="col-lg-7 col-md-7">
                <div className="cta-txt pl-10">
                  <p className="lead text-success">Know About Us</p>
                  <h2 className="line-left text-info green text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Keep moving forward that’s how winning
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 mt-4 mt-md-0">
                <div className="cta-actions ms-xl-5 ps-md-5">
                  <div className="flex mb-4 items-center">
                    <span className="icon-sm text-green-600 bg-white rounded-full p-3 flex items-center justify-center">
                      <FaPhone className="text-2xl" />
                    </span>
                    <div className="ml-4 text-white">
                      <span className="font-extrabold">Contact Us At </span>
                      <p className="mt-1 text-xl mb-0 font-bold text-white">
                        +92-332-5075638
                      </p>
                      <p className="text-xl font-bold text-white">
                        connect@allstarcm.pk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
