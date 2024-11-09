import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import DefaultLayout from './../../layout/DefaultLayout';

const Events = () => {
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

  const handleCreateEvent = () => {
    navigate('/events/add');
  };

  const handleViewDetails = (id) => {
    navigate(`/event/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/event/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/cricket/events/${id}`,
      );

      if (response.data.success) {
        toast.success('Event deleted successfully');
        setEvents(events.filter((event) => event._id !== id));
      } else {
        toast.error('Error deleting event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Error deleting event');
    }
  };

  return (
    <>
      <DefaultLayout>
        <div className="container mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold dark:text-white">Events</h2>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              onClick={handleCreateEvent}
            >
              Create Event
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
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
                <button
                  className="px-6 ml-2 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                  onClick={() => handleEdit(event._id)}
                >
                  Edit
                </button>
                <button
                  className="px-6 ml-2 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Events;
