import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import TableThree from '../components/Tables/TableThree.tsx';
import DefaultLayout from '../layout/DefaultLayout';

const AllBowler = () => {
  const [bowlers, setBowlers] = useState([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/bowler/all',
        );
        if (!response.data.success) {
          return toast.error('Error fetching bowlers');
        }
        setBowlers(response.data.data);
      } catch (error) {
        console.error('Error fetching bowlers:', error);
        toast.error('Error fetching bowlers');
      }
    };

    fetchBowlers();
  }, []);

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">All Bowlers</h2>
        <TableThree data={bowlers} />
      </div>
    </DefaultLayout>
  );
};

export default AllBowler;
