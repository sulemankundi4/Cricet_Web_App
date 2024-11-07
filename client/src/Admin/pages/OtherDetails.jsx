import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from './../common/Loader/index';

const OtherDetails = () => {
  const { id } = useParams();
  const [other, setOther] = useState(null);

  useEffect(() => {
    const fetchOtherDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cricket/other/details/${id}`,
        );
        if (!response.data.success) {
          return toast.error('Error fetching other details');
        }
        setOther(response.data.data);
      } catch (error) {
        console.error('Error fetching other details:', error);
        toast.error('Error fetching other details');
      }
    };

    fetchOtherDetails();
  }, [id]);

  const handleVerifyAccount = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cricket/other/verify/${id}`,
      );

      if (response.data.success) {
        setOther({ ...other, accountStatus: true });
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

  if (!other) {
    return <Loader />;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Other Details
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark">
          <h3 className="text-xl font-bold mb-4 dark:text-white">
            {other.firstName} {other.lastName}
          </h3>
          <p className="dark:text-white">
            <strong>Father's Name:</strong> {other.fathersName}
          </p>
          <p className="dark:text-white">
            <strong>CNIC No:</strong> {other.cnicNo}
          </p>
          <p className="dark:text-white">
            <strong>Present Address:</strong> {other.presentAddress}
          </p>
          <p className="dark:text-white">
            <strong>Permanent Address:</strong> {other.permanentAddress}
          </p>
          <p className="dark:text-white">
            <strong>Date of Birth:</strong>{' '}
            {new Date(other.dateOfBirth).toLocaleDateString()}
          </p>
          <p className="dark:text-white">
            <strong>Gender:</strong> {other.gender}
          </p>
          <p className="dark:text-white">
            <strong>Contact No:</strong> {other.contactNo}
          </p>
          <p className="dark:text-white">
            <strong>Email:</strong> {other.email}
          </p>
          <p className="dark:text-white">
            <strong>Cricket Expertise:</strong> {other.cricketExpertise}
          </p>
          <p className="dark:text-white">
            <strong>Roles:</strong> {other.coach && 'Coach, '}
            {other.analyst && 'Analyst, '}
            {other.trainer && 'Trainer, '}
            {other.physio && 'Physio, '}
            {other.masseur && 'Masseur, '}
            {other.sportsPhysician && 'Sports Physician, '}
            {other.commentator && 'Commentator, '}
            {other.expertDressDesigner && 'Expert Dress Designer'}
          </p>
          <p className="dark:text-white">
            <strong>Contact Type:</strong> {other.contactType}
          </p>
          <p className="dark:text-white">
            <strong>Cricket Career:</strong> {other.cricketCareer}
          </p>
          <p className="dark:text-white">
            <strong>First Class Cricketer:</strong>{' '}
            {other.firstClassCricketer ? 'Yes' : 'No'}
          </p>
          <p className="dark:text-white">
            <strong>Contract:</strong> {other.contract ? 'Yes' : 'No'}
          </p>
          <p className="dark:text-white">
            <strong>Major Achievements:</strong> {other.majorAchievements}
          </p>
          <p className="dark:text-white">
            <strong>Ideal Cricketer:</strong> {other.idealCricketer}
          </p>
          <p className="dark:text-white">
            <strong>Dream Ground:</strong> {other.dreamGround}
          </p>
          <p
            className={`font-medium py-2 mt-3 px-4 rounded-md text-white text-center ${
              other.accountStatus ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            <strong>Account Status:</strong>{' '}
            {other.accountStatus ? 'Verified' : 'Not Verified'}
          </p>

          {!other.accountStatus && (
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

export default OtherDetails;
