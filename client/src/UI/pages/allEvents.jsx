import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navbar from './../components/navbar';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/events/all',
        );
        if (response.data.success) {
          setEvents(response.data.data);
        } else {
          toast.error('Error fetching events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        toast.error('Error fetching events');
      }
    };

    fetchEvents();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/event/details/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 ">All Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white p-6 rounded-lg shadow-md dark:border-strokedark dark:bg-boxdark"
            >
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src={`http://localhost:5000/${event.pictures[0]}`}
                alt={event.name}
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {event.name}
              </h3>
              <p className="text-gray-600 mb-4 dark:text-white">
                {event.description.split(' ').slice(0, 50).join(' ')}...
              </p>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                onClick={() => handleViewDetails(event._id)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllEvents;
