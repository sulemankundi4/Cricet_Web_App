import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../../layout/DefaultLayout';
import Loader from '../../common/Loader';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cricket/events/${id}`,
        );
        if (response.data.success) {
          setEvent(response.data.data);
        } else {
          toast.error('Error fetching event details');
        }
      } catch (error) {
        console.error('Error fetching event details:', error);
        toast.error('Error fetching event details');
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!event) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Event Details
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          <h3 className="text-xl font-bold mb-4 dark:text-white">
            {event.name}
          </h3>
          <p className="dark:text-white">
            <strong>Start Date:</strong>{' '}
            {new Date(event.startDate).toLocaleDateString()}
          </p>
          <p className="dark:text-white">
            <strong>Description:</strong> {event.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {event.pictures.map((picture, index) => (
              <div key={index} className="media-item">
                <a
                  href={`http://localhost:5000/${picture}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-80 h-60 rounded-lg border-2 shadow-lg object-cover"
                    src={`http://localhost:5000/${picture}`}
                    alt={`Event Picture ${index + 1}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EventDetails;
