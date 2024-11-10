import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../../layout/DefaultLayout';
import Loader from '../../common/Loader';

const PartnerDetails = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    const fetchPartnerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cricket/partners/${id}`,
        );
        if (response.data.success) {
          setPartner(response.data.data);
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

  if (!partner) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Partner Details
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          <h3 className="text-xl font-bold mb-4 dark:text-white">
            {partner.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="media-item">
              <a
                href={`http://localhost:5000/${partner.partnerLogo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-80 h-60 rounded-lg border-2 shadow-lg object-cover"
                  src={`http://localhost:5000/${partner.partnerLogo}`}
                  alt="Partner Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PartnerDetails;
