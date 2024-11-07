import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import TableThree from '../components/Tables/TableThree.tsx';
import DefaultLayout from '../layout/DefaultLayout';

const AllOther = () => {
  const [others, setOthers] = useState([]);

  useEffect(() => {
    const fetchOthers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/other/all',
        );
        if (!response.data.success) {
          return toast.error('Error fetching others');
        }
        setOthers(response.data.data);
      } catch (error) {
        console.error('Error fetching others:', error);
        toast.error('Error fetching others');
      }
    };

    fetchOthers();
  }, []);

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">All Others</h2>
        <TableThree data={others} />
      </div>
    </DefaultLayout>
  );
};

export default AllOther;
