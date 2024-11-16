import React from 'react';
import Navbar from './../components/navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            At All Star Cricket Management, we empower Pakistan's cricket talent
            through holistic development, strategic partnerships and innovative
            solutions. Founded by Mr.Waqar Ahmed Khan, our company combines
            cricket expertise, marketing savvy and financial acumen to bridge
            the gap between talent and opportunity. We prioritize player
            well-being, integrity and excellence, fostering careers through
            personalized coaching, contract negotiation, sponsorship
            facilitation and financial planning. Dedicated to unlocking cricket
            potential, we drive success, sustainability and national pride.
          </p>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Vision</h2>
          <p className="mt-4 text-lg text-gray-600">
            Empowering domestic cricketers to achieve excellence, our company
            provides holistic support, fostering growth, success and legacy.
            Through expert guidance, strategic partnerships and innovative
            solutions, we bridge the gap between talent and opportunity, shaping
            the future of cricket.
          </p>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Mission</h2>
          <p className="mt-4 text-lg text-gray-600">
            Providing comprehensive support, guidance and opportunities, we
            propel Pakistani cricketers to global excellence, ensuring
            well-rounded development, financial security and enduring impact.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
