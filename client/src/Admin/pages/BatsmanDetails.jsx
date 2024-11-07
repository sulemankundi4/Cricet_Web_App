import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from './../common/Loader/index';

const BatsmanDetails = () => {
  const { id } = useParams();
  const [batsman, setBatsman] = useState(null);

  useEffect(() => {
    const fetchBatsmanDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cricket/batsman/details/${id}`,
        );
        if (!response.data.success) {
          return toast.error('Error fetching batsman details');
        }
        setBatsman(response.data.data);
      } catch (error) {
        console.error('Error fetching batsman details:', error);
        toast.error('Error fetching batsman details');
      }
    };

    fetchBatsmanDetails();
  }, [id]);

  const handleVerifyAccount = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cricket/batsman/verify/${id}`,
      );

      if (response.data.success) {
        setBatsman({ ...batsman, accountStatus: true });
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

  if (!batsman) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Batsman Details
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          <h3 className="text-xl font-bold mb-4 dark:text-white">
            {batsman.firstName} {batsman.lastName}
          </h3>
          <p className="dark:text-white">
            <strong>Father's Name:</strong> {batsman.fathersName}
          </p>
          <p className="dark:text-white">
            <strong>CNIC No:</strong> {batsman.cnicNo}
          </p>
          <p className="dark:text-white">
            <strong>Present Address:</strong> {batsman.presentAddress}
          </p>
          <p className="dark:text-white">
            <strong>Permanent Address:</strong> {batsman.permanentAddress}
          </p>
          <p className="dark:text-white">
            <strong>Date of Birth:</strong>{' '}
            {new Date(batsman.dateOfBirth).toLocaleDateString()}
          </p>
          <p className="dark:text-white">
            <strong>Gender:</strong> {batsman.gender}
          </p>
          <p className="dark:text-white">
            <strong>Contact No:</strong> {batsman.contactNo}
          </p>
          <p className="dark:text-white">
            <strong>Email:</strong> {batsman.email}
          </p>
          <p className="dark:text-white">
            <strong>Cricket Expertise:</strong> {batsman.cricketExpertise}
          </p>
          <p className="dark:text-white">
            <strong>Batsman Hand:</strong> {batsman.batsmanHand}
          </p>
          <p className="dark:text-white">
            <strong>Contact Type:</strong> {batsman.contactType}
          </p>
          <p className="dark:text-white">
            <strong>Cricket Career:</strong> {batsman.cricketCareer}
          </p>
          <p className="dark:text-white">
            <strong>First Class Cricketer:</strong>{' '}
            {batsman.firstClassCricketer ? 'Yes' : 'No'}
          </p>
          <p className="dark:text-white">
            <strong>Contract:</strong> {batsman.contract ? 'Yes' : 'No'}
          </p>
          <p className="dark:text-white">
            <strong>Major Achievements:</strong> {batsman.majorAchievements}
          </p>
          <p className="dark:text-white">
            <strong>Ideal Cricketer:</strong> {batsman.idealCricketer}
          </p>
          <p className="dark:text-white">
            <strong>Dream Ground:</strong> {batsman.dreamGround}
          </p>
          <p
            className={`font-medium py-2 mt-3 px-4 rounded-md text-white text-center ${
              batsman.accountStatus ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <strong>Account Status:</strong>{' '}
            {batsman.accountStatus ? 'Verified' : 'Not Verified'}
          </p>

          {!batsman.accountStatus && (
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

export default BatsmanDetails;
