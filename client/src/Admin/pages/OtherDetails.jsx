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

      <div className="bg-white p-6 rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark mt-10">
        <h3 className="text-xl font-bold mb-4 dark:text-white">Media Files</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {other.cnicFront && (
            <div className="media-item">
              <h4 className="text-lg font-semibold dark:text-white">
                CNIC Front
              </h4>
              <a
                href={`http://localhost:5000/${other.cnicFront}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-80 h-40 rounded-lg border-2 shadow-lg object-cover"
                  src={`http://localhost:5000/${other.cnicFront}`}
                  alt="CNIC Front"
                />
              </a>
            </div>
          )}
          {other.cnicBack && (
            <div className="media-item">
              <h4 className="text-lg font-semibold dark:text-white">
                CNIC Back
              </h4>
              <a
                href={`http://localhost:5000/${other.cnicBack}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-80 h-40 rounded-lg border-2 shadow-lg object-cover"
                  src={`http://localhost:5000/${other.cnicBack}`}
                  alt="CNIC Back"
                />
              </a>
            </div>
          )}
          {other.picture && (
            <div className="media-item">
              <h4 className="text-lg font-semibold dark:text-white">
                Profile Picture
              </h4>
              <a
                href={`http://localhost:5000/${other.picture}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-80 h-40 rounded-lg border-2 shadow-lg object-cover"
                  src={`http://localhost:5000/${other.picture}`}
                  alt="Profile Picture"
                />
              </a>
            </div>
          )}
          {other.feeSubmission && (
            <div className="media-item">
              <h4 className="text-lg font-semibold dark:text-white">
                Fee Submission
              </h4>
              <a
                href={`http://localhost:5000/${other.feeSubmission}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-80 h-40 rounded-lg border-2 shadow-lg object-cover"
                  src={`http://localhost:5000/${other.feeSubmission}`}
                  alt="Fee Submission"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default OtherDetails;
