import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Loader from '../../Admin/common/Loader';
import Navbar from './../components/navbar';

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

  if (!batsman) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 ">Batsman Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg ">
          <h3 className="text-xl font-bold mb-4 ">
            {batsman.firstName} {batsman.lastName}
          </h3>
          <p className="">
            <strong>Father's Name:</strong> {batsman.fathersName}
          </p>
          <p className="">
            <strong>CNIC No:</strong> {batsman.cnicNo}
          </p>
          <p className="">
            <strong>Present Address:</strong> {batsman.presentAddress}
          </p>
          <p className="">
            <strong>Permanent Address:</strong> {batsman.permanentAddress}
          </p>
          <p className="">
            <strong>Date of Birth:</strong>{' '}
            {new Date(batsman.dateOfBirth).toLocaleDateString()}
          </p>
          <p className="">
            <strong>Gender:</strong> {batsman.gender}
          </p>
          <p className="">
            <strong>Contact No:</strong> {batsman.contactNo}
          </p>
          <p className="">
            <strong>Email:</strong> {batsman.email}
          </p>
          <p className="">
            <strong>Cricket Expertise:</strong> {batsman.cricketExpertise}
          </p>
          <p className="">
            <strong>Batsman Hand:</strong> {batsman.batsmanHand}
          </p>
          <p className="">
            <strong>Contact Type:</strong> {batsman.contactType}
          </p>
          <p className="">
            <strong>Cricket Career:</strong> {batsman.cricketCareer}
          </p>
          <p className="">
            <strong>First Class Cricketer:</strong>{' '}
            {batsman.firstClassCricketer ? 'Yes' : 'No'}
          </p>
          <p className="">
            <strong>Contract:</strong> {batsman.contract ? 'Yes' : 'No'}
          </p>
          <p className="">
            <strong>Major Achievements:</strong> {batsman.majorAchievements}
          </p>
          <p className="">
            <strong>Ideal Cricketer:</strong> {batsman.idealCricketer}
          </p>
          <p className="">
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
        </div>
      </div>
    </>
  );
};

export default BatsmanDetails;
