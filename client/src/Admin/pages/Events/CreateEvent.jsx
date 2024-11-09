import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    description: '',
    pictures: [],
  });

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
      const response = await axios.post(
        'http://localhost:5000/api/cricket/events/new',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.data.success) {
        toast.success('Event created successfully');
        navigate('/events');
      } else {
        toast.error('Error creating event');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      toast.error('Error creating event');
    }
  };

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Create Event
        </h2>
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
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Create Event
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default CreateEvent;
