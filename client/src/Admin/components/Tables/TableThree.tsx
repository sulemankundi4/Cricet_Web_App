import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaStar, FaTrash } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const TableThree = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleViewClick = (id) => {
    if (location.pathname === '/all-batsman') {
      navigate(`/batsman/${id}`);
    } else if (location.pathname === '/all-bowler') {
      navigate(`/bowler/${id}`);
    } else {
      navigate(`/other/${id}`);
    }
  };

  const handleToggleFeatured = async (id, type) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/cricket/feature/${type}/${id}`,
      );

      if (response.data.success) {
        toast.success('Profile updated successfully');
        window.location.reload();
      } else {
        toast.error('Error updating profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    }
  };

  const handleDelete = async (id, type) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/cricket/delete/${type}/${id}`,
      );

      if (response.data.success) {
        toast.success('Profile deleted successfully');
        window.location.reload();
      } else {
        toast.error('Error deleting profile');
      }
    } catch (error) {
      console.error('Error deleting profile:', error);
      toast.error('Error deleting profile');
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                First Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Last Name
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                CNIC No
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Contact No
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Account Status
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((batsman, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {batsman.firstName}
                  </h5>
                  <p className="text-sm">{batsman.email}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {batsman.lastName}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{batsman.cnicNo}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{batsman.email}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {batsman.contactNo}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      batsman.accountStatus
                        ? 'bg-success text-success'
                        : 'bg-danger text-danger'
                    }`}
                  >
                    {batsman.accountStatus ? 'Verified' : 'Not Verified'}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleViewClick(batsman._id)}
                  >
                    <FaEye size={25} />
                  </button>

                  <button
                    className={`${
                      batsman.isFeatured ? 'text-yellow-500' : 'text-gray-400'
                    } ml-3`}
                    onClick={() =>
                      handleToggleFeatured(
                        batsman._id,
                        location.pathname.includes('batsman')
                          ? 'batsman'
                          : location.pathname.includes('bowler')
                          ? 'bowler'
                          : 'other',
                      )
                    }
                  >
                    <FaStar size={25} />
                  </button>

                  {batsman.accountStatus && (
                    <button
                      className="text-red-500 ml-2 hover:text-red-700"
                      onClick={() =>
                        handleDelete(
                          batsman._id,
                          location.pathname.includes('batsman')
                            ? 'batsman'
                            : location.pathname.includes('bowler')
                            ? 'bowler'
                            : 'other',
                        )
                      }
                    >
                      <FaTrash size={25} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
