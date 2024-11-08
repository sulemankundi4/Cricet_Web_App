import React from 'react';

const PlayerProfile = ({ batsman }) => {
  console.log(batsman);
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
          {batsman.map((batsman, index) => (
            <div
              key={index}
              className="team-member2 text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="team-img mb-4">
                <img
                  className="w-94  h-55 rounded-lg"
                  src={`http://localhost:5000/${batsman.feeSubmission}`}
                  alt="Team"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {batsman.firstName} {batsman.lastName}
              </h3>
              <p className="text-gray-600">{batsman.cricketExpertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlayerProfile;
