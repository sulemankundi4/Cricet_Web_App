import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navbar from '../components/navbar';

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

  const handleViewDetails = (id) => {
    navigate(`/partner/${id}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-black">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
