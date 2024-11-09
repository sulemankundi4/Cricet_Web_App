import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../../layout/DefaultLayout';
import Loader from '../../common/Loader';

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    description: '',
    pictures: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cricket/events/${id}`,
        );
        if (response.data.success) {
          const event = response.data.data;
          setFormData({
            name: event.name,
            startDate: new Date(event.startDate).toISOString().split('T')[0],
            description: event.description,
            pictures: event.pictures,
          });
          setLoading(false);
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'pictures') {
      setFormData({ ...formData, pictures: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      if (key === 'pictures') {
        for (let i = 0; i < formData.pictures.length; i++) {
          data.append('pictures', formData.pictures[i]);
        }
      } else {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/cricket/events/${id}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.data.success) {
        toast.success('Event updated successfully');
        navigate(`/event/${id}`);
      } else {
        toast.error('Error updating event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      toast.error('Error updating event');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white">
              Event Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white">
              Pictures
            </label>
            <input
              type="file"
              name="pictures"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark"
              multiple
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Update Event
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default EditEvent;
