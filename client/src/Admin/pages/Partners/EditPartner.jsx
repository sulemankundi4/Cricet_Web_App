import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../../layout/DefaultLayout';
import Loader from '../../common/Loader';

const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    partnerLogo: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartnerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/partners/${id}`,
        );
        if (response.data.success) {
          const partner = response.data.data;
          setFormData({
            name: partner.name,
            partnerLogo: partner.partnerLogo,
          });
          setLoading(false);
        } else {
          toast.error('Error fetching partner details');
        }
      } catch (error) {
        console.error('Error fetching partner details:', error);
        toast.error('Error fetching partner details');
      }
    };

    fetchPartnerDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'partnerLogo') {
      setFormData({ ...formData, partnerLogo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/partners/${id}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.data.success) {
        toast.success('Partner updated successfully');
        navigate('/partners');
      } else {
        toast.error('Error updating partner');
      }
    } catch (error) {
      console.error('Error updating partner:', error);
      toast.error('Error updating partner');
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Edit Partner
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-white">
              Partner Name
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
              Partner Logo
            </label>
            <input
              type="file"
              name="partnerLogo"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Update Partner
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default EditPartner;
