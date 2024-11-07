import React from 'react';
import CardDataStats from '../../components/CardDataStats';

import DefaultLayout from '../../layout/DefaultLayout';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { MdSportsCricket } from 'react-icons/md';
import { MdVerified } from 'react-icons/md';
import { FaBaseballBall } from 'react-icons/fa';
import { FaRProject } from 'react-icons/fa6';

const ECommerce = () => {
  const [stats, setStats] = useState({
    totalBatsmen: 0,
    verifiedBatsmen: 0,
    totalBowlers: 0,
    verifiedBowlers: 0,
    totalOthers: 0,
    verifiedOthers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/cricket/stats',
        );

        if (!response.data.success) {
          return toast.error('Error fetching stats');
        }
        console.log(response);
        setStats(response.data.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);
  return (
    <>
      <DefaultLayout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardDataStats title="Total Batsman" total={stats.totalBatsmen}>
            <MdSportsCricket size={28} />
          </CardDataStats>
          <CardDataStats title="Verified Batsmen" total={stats.verifiedBatsmen}>
            <MdVerified size={28} />
          </CardDataStats>
          <CardDataStats title="Total Bowlers" total={stats.totalBowlers}>
            <FaBaseballBall size={28} />
          </CardDataStats>
          <CardDataStats title="Verified Bowlers" total={stats.verifiedBowlers}>
            <MdVerified size={28} />
          </CardDataStats>
          <CardDataStats title="Other Category" total={stats.totalOthers}>
            <FaRProject size={28} />
          </CardDataStats>
          <CardDataStats title="Verified Experts" total={stats.verifiedOthers}>
            <MdVerified size={28} />
          </CardDataStats>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ECommerce;
