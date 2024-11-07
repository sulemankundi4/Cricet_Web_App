import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from './../common/Loader/index';

const BowlerDetails = () => {
  const { id } = useParams();
  const [bowler, setBowler] = useState(null);

  useEffect(() => {
    const fetchBowlerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cricket/bowler/details/${id}`,
        );
        if (!response.data.success) {
          return toast.error('Error fetching bowler details');
        }
        setBowler(response.data.data);
      } catch (error) {
        console.error('Error fetching bowler details:', error);
        toast.error('Error fetching bowler details');
      }
    };

    fetchBowlerDetails();
  }, [id]);

  const handleVerifyAccount = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cricket/bowler/verify/${id}`,
      );

      if (response.data.success) {
        setBowler({ ...bowler, accountStatus: true });
        toast.success('Account verified successfully!');
      } else {
        return toast.error('Error verifying account');
      }

      window.location.reload();
    } catch (error) {
      console.error('Error verifying account:', error);
      toast.error('Error verifying account');
    }
  };

  if (!bowler) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Bowler Details
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          <h3 className="text-xl font-bold mb-4 dark:text-white">
            {bowler.firstName} {bowler.lastName}
          </h3>
          <p className="dark:text-white">
            <strong>Father's Name:</strong> {bowler.fathersName}
          </p>
          <p className="dark:text-white">
            <strong>CNIC No:</strong> {bowler.cnicNo}
          </p>
          <p className="dark:text-white">
            <strong>Present Address:</strong> {bowler.presentAddress}
          </p>
          <p className="dark:text-white">
            <strong>Permanent Address:</strong> {bowler.permanentAddress}
          </p>
          <p className="dark:text-white">
            <strong>Date of Birth:</strong>{' '}
            {new Date(bowler.dateOfBirth).toLocaleDateString()}
          </p>
          <p className="dark:text-white">
            <strong>Gender:</strong> {bowler.gender}
          </p>
          <p className="dark:text-white">
            <strong>Contact No:</strong> {bowler.contactNo}
          </p>
          <p className="dark:text-white">
            <strong>Email:</strong> {bowler.email}
          </p>
          <p className="dark:text-white">
            <strong>Cricket Expertise:</strong> {bowler.cricketExpertise}
          </p>
          <p className="dark:text-white">
            <strong>Bowler Hand:</strong> {bowler.bowlerHand}
          </p>
          <p className="dark:text-white">
            <strong>Bowler Type:</strong> {bowler.bowlerType}
          </p>
          <p className="dark:text-white">
            <strong>Contact Type:</strong> {bowler.contactType}
          </p>
          <p className="dark:text-white">
            <strong>Cricket Career:</strong> {bowler.cricketCareer}
          </p>
          <p className="dark:text-white">
            <strong>First Class Cricketer:</strong>{' '}
            {bowler.firstClassCricketer ? 'Yes' : 'No'}
          </p>
          <p className="dark:text-white">
            <strong>Contract:</strong> {bowler.contract ? 'Yes' : 'No'}
          </p>
          <p className="dark:text-white">
            <strong>Major Achievements:</strong> {bowler.majorAchievements}
          </p>
          <p className="dark:text-white">
            <strong>Ideal Cricketer:</strong> {bowler.idealCricketer}
          </p>
          <p className="dark:text-white">
            <strong>Dream Ground:</strong> {bowler.dreamGround}
          </p>
          <p
            className={`font-medium py-2 mt-3 px-4 rounded-md text-white text-center ${
              bowler.accountStatus ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <strong>Account Status:</strong>{' '}
            {bowler.accountStatus ? 'Verified' : 'Not Verified'}
          </p>

          {!bowler.accountStatus && (
            <button
              onClick={handleVerifyAccount}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Verify Account
            </button>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BowlerDetails;
