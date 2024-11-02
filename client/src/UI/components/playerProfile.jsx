import React from 'react';
import img1 from '../../assets/images/team-m4.jpg';
import img2 from '../../assets/images/team-m5.jpg';
import img3 from '../../assets/images/team-m6.jpg';

const PlayerProfile = () => {
  return (
    <section className="team2-sec bg-white">
      <div className="container mx-auto">
        <div className="text-center pb-8">
          <p className="text-xl text-green-600 font-semibold">Team Players</p>
          <h2 className="text-5xl font-bold text-gray-800">
            Expert Team Leaders
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="team-member2 text-center bg-white p-6 rounded-lg shadow-md">
            <div className="team-img mb-4">
              <img className="w-full h-auto rounded-lg" src={img1} alt="Team" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="#" className="hover:text-green-600">
                Xavier Blackwood
              </a>
            </h3>
            <p className="text-gray-600">Top All Rounder</p>
          </div>
          <div className="team-member2 text-center bg-white p-6 rounded-lg shadow-md">
            <div className="team-img mb-4">
              <img className="w-full h-auto rounded-lg" src={img2} alt="Team" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="#" className="hover:text-green-600">
                Felix Nightshade
              </a>
            </h3>
            <p className="text-gray-600">Top Test Cricketer</p>
          </div>
          <div className="team-member2 text-center bg-white p-6 rounded-lg shadow-md">
            <div className="team-img mb-4">
              <img className="w-full h-auto rounded-lg" src={img3} alt="Team" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              <a href="#" className="hover:text-green-600">
                Xavier Blackwood
              </a>
            </h3>
            <p className="text-gray-600">Top T20 Cricketer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerProfile;
