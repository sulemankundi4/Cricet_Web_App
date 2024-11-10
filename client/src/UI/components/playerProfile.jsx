import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const PlayerProfile = ({ batsman }) => {
  console.log(batsman);

  const getRoles = (player) => {
    const roles = [];
    if (player.coach) roles.push('Coach');
    if (player.analyst) roles.push('Analyst');
    if (player.trainer) roles.push('Trainer');
    if (player.physio) roles.push('Physio');
    if (player.masseur) roles.push('Masseur');
    if (player.sportsPhysician) roles.push('Sports Physician');
    if (player.commentator) roles.push('Commentator');
    if (player.expertDressDesigner) roles.push('Expert Dress Designer');
    return roles.join(', ');
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="team2-sec bg-white">
      <div className="container mx-auto">
        <div className="text-center pb-8">
          <p className="text-xl text-green-600 font-semibold">
            Featured Players
          </p>
          <h2 className="text-5xl font-bold text-gray-800">
            Featured Profiles
          </h2>
        </div>
        <Slider {...settings}>
          {batsman.map((batsman, index) => (
            <div
              key={index}
              className="team-member2 text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="team-img mb-4">
                <img
                  className="w-94 h-55 rounded-lg"
                  src={`http://localhost:5000/${batsman.feeSubmission}`}
                  alt="Team"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {batsman.firstName} {batsman.lastName}
              </h3>
              <p className="text-gray-600">
                {batsman.cricketExpertise === 'other'
                  ? getRoles(batsman)
                  : batsman.cricketExpertise.toUpperCase()}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PlayerProfile;
