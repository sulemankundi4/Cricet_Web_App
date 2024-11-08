import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import CompanySlider from '../components/companySlider';
import batterImg from '../../assets/images/batter.jpg';
import About from '../components/about';
import PlayerProfile from '../components/playerProfile';
import bgImg from '../../assets/images/cricket-video.jpg';
import { FaPhone } from 'react-icons/fa6';
import Gallery from '../components/gallery';
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
          'http://localhost:5000/api/cricket/batsman/all',
        );
        console.log(response);
        if (response.data.success) {
          const verifiedBatsmen = response.data.data.filter(
            (batsman) => batsman.accountStatus === true,
          );
          setBatsman(verifiedBatsmen.slice(0, 3)); // Get the first three verified batsmen
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
        <CompanySlider />
        <About />
        <PlayerProfile batsman={batsman} />

        <div
          className="video-sec jarallax bg-cover bg-center flex items-center justify-center mt-20"
          style={{
            backgroundImage: `url('${bgImg}')`,
            backgroundAttachment: 'fixed',
          }}
        ></div>

        <section class="cta-sec2 sec-padding bg-success">
          <div class="container">
            <div class="row g-0 align-items-center">
              <div class="col-lg-7 col-md-7">
                <div class="cta-txt pl-10">
                  <p class="lead text-success">Know About Us</p>
                  <h2 class="sec-title line-left green text-info">
                    Keep moving forward that’s how winning
                  </h2>
                </div>
              </div>
              <div class="col-lg-4 offset-lg-1 col-md-5">
                <div class="cta-actions ms-xl-5 ps-md-5">
                  <div className="flex items-center">
                    <span className="icon-sm text-green-600 bg-white rounded-full p-3 flex items-center justify-center">
                      <FaPhone className="text-2xl" />
                    </span>
                    <div className="ml-4 text-white">
                      <span className="font-bold">Call Us Anytime</span>
                      <h4 className="mt-1 font-bold text-white">
                        0045 (2328) 7256
                      </h4>
                    </div>
                  </div>
                  <a href="#" class="btn btn-info mt-4">
                    Contact Support Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Gallery />
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
