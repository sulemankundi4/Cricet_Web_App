import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import TableThree from '../components/Tables/TableThree.tsx';
import DefaultLayout from '../layout/DefaultLayout';

const AllBatsman = () => {
  const [batsmen, setBatsmen] = useState([]);

  useEffect(() => {
    const fetchBatsmen = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/batsman/all',
        );
        if (!response.data.success) {
          return toast.error('Error fetching batsmen');
        }
        setBatsmen(response.data.data);
      } catch (error) {
        console.error('Error fetching batsmen:', error);
        toast.error('Error fetching batsmen');
      }
    };

    fetchBatsmen();
  }, []);

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">All Batsmen</h2>
        <TableThree data={batsmen} />
      </div>
    </DefaultLayout>
  );
};

export default AllBatsman;
