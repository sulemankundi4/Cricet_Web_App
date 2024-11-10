import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../../layout/DefaultLayout';

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/partners/all',
        );
        if (response.data.success) {
          setPartners(response.data.data);
        } else {
          toast.error('Error fetching partners');
        }
      } catch (error) {
        console.error('Error fetching partners:', error);
        toast.error('Error fetching partners');
      }
    };

    fetchPartners();
  }, []);

  const handleAddPartner = () => {
    navigate('/add-partner');
  };

  const handleViewDetails = (id) => {
    navigate(`/partner/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/partner/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/cricket/partners/${id}`,
      );

      if (response.data.success) {
        toast.success('Partner deleted successfully');
        setPartners(partners.filter((partner) => partner._id !== id));
      } else {
        toast.error('Error deleting partner');
      }
    } catch (error) {
      console.error('Error deleting partner:', error);
      toast.error('Error deleting partner');
    }
  };

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold dark:text-white">Partners</h2>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            onClick={handleAddPartner}
          >
            Add Partner
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <div
              key={partner._id}
              className="bg-white p-6 rounded-lg shadow-md dark:border-strokedark dark:bg-boxdark"
            >
              <img
                className="w-full h-40 rounded-lg object-cover mb-4"
                src={`http://localhost:5000/${partner.partnerLogo}`}
                alt={partner.name}
              />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {partner.name}
              </h3>
              <div className="flex space-x-2">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                  onClick={() => handleViewDetails(partner._id)}
                >
                  Details
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                  onClick={() => handleEdit(partner._id)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
                  onClick={() => handleDelete(partner._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Partners;
