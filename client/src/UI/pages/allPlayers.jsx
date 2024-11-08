import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './../components/navbar';

const AllPlayers = () => {
  const [batsmen, setBatsmen] = useState([]);
  const [bowlers, setBowlers] = useState([]);
  const [others, setOthers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBatsmen = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/batsman/all',
        );
        if (response.data.success) {
          const verifiedBatsmen = response.data.data.filter(
            (batsman) => batsman.accountStatus === true,
          );
          setBatsmen(verifiedBatsmen);
        } else {
          console.error('Error fetching batsmen:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching batsmen:', error);
      }
    };

    const fetchBowlers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/bowler/all',
        );
        if (response.data.success) {
          const verifiedBowlers = response.data.data.filter(
            (bowler) => bowler.accountStatus === true,
          );
          setBowlers(verifiedBowlers);
        } else {
          console.error('Error fetching bowlers:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching bowlers:', error);
      }
    };

    const fetchOthers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/other/all',
        );
        if (response.data.success) {
          const verifiedExperts = response.data.data.filter(
            (other) => other.accountStatus === true,
          );
          setOthers(verifiedExperts);
        } else {
          console.error('Error fetching others:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching others:', error);
      }
    };

    fetchBatsmen();
    fetchBowlers();
    fetchOthers();
  }, []);

  const handleViewDetails = (type, id) => {
    navigate(`/${type}/ui/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">All Players</h2>

        <section className="team2-sec bg-white">
          <div className="container mx-auto">
            <div className="text-center pb-8">
              <p className="text-3xl  text-green-600 font-semibold">Batsman</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {batsmen.map((batsman, index) => (
                <div
                  key={index}
                  className="team-member2 text-center bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="team-img mb-4">
                    <img
                      className="w-full h-50 rounded-lg border-2 shadow-lg object-cover"
                      src={`http://localhost:5000/${batsman.picture}`}
                      alt="Team"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {batsman.firstName} {batsman.lastName}
                  </h3>
                  <p className="text-gray-600">{batsman.cricketExpertise}</p>
                  <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    onClick={() => handleViewDetails('batsman', batsman._id)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team2-sec bg-white mt-10">
          <div className="container mx-auto">
            <div className="text-center pb-8">
              <p className="text-3xl text-green-600 font-semibold">Bowlers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bowlers.map((bowler, index) => (
                <div
                  key={index}
                  className="team-member2 text-center bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="team-img mb-4">
                    <img
                      className="w-full h-auto rounded-lg"
                      src={`http://localhost:5000/${bowler.picture}`}
                      alt="Team"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {bowler.firstName} {bowler.lastName}
                  </h3>
                  <p className="text-gray-600">{bowler.cricketExpertise}</p>
                  <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    onClick={() => handleViewDetails('bowler', bowler._id)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team2-sec bg-white mt-10">
          <div className="container mx-auto">
            <div className="text-center pb-8">
              <p className="text-3xl text-green-600 font-semibold">Others</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {others.map((other, index) => (
                <div
                  key={index}
                  className="team-member2 text-center bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="team-img mb-4">
                    <img
                      className="w-full h-auto rounded-lg"
                      src={`http://localhost:5000/${other.picture}`}
                      alt="Team"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {other.firstName} {other.lastName}
                  </h3>
                  <p className="text-gray-600">{other.Role}</p>
                  <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    onClick={() => handleViewDetails('other', other._id)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AllPlayers;
