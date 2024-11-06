import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    cnicNo: '',
    presentAddress: '',
    permanentAddress: '',
    dateOfBirth: '',
    gender: '',
    contactNo: '',
    email: '',
    cricketExpertise: '',
    batsmanHand: '',
    bowlerHand: '',
    bowlerType: '',
    coach: false,
    analyst: false,
    trainer: false,
    physio: false,
    masseur: false,
    sportsPhysician: false,
    commentator: false,
    expertDressDesigner: false,
    contactType: '',
    cricketCareer: '',
    firstClassCricketer: false,
    contract: false,
    majorAchievements: '',
    idealCricketer: '',
    dreamGround: '',
    cnicFront: null,
    cnicBack: null,
    feeSubmission: null,
    picture: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="register-page">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="fathersName"
                placeholder="Father's Name"
                value={formData.fathersName}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="cnicNo"
                placeholder="CNIC No"
                value={formData.cnicNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="presentAddress"
                placeholder="Present Address"
                value={formData.presentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="permanentAddress"
                placeholder="Permanent Address"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <input
                type="text"
                name="contactNo"
                placeholder="Contact No"
                value={formData.contactNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Cricket Expertise</h3>
            <div className="grid grid-cols-1 gap-3 mt-4">
              <div className="w-full">
                <label className="block text-gray-700">
                  Cricket Expertise:
                </label>
                <select
                  name="cricketExpertise"
                  value={formData.cricketExpertise}
                  onChange={handleChange}
                  className="border border-blue-500 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select Expertise</option>
                  <option value="batsman">Batsman</option>
                  <option value="bowler">Bowler</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Conditional rendering for batsman options */}
              {formData.cricketExpertise === 'batsman' && (
                <div className="w-full">
                  <label className="block text-gray-700 mb-2">
                    Batsman Hand:
                  </label>
                  <select
                    name="batsmanHand"
                    value={formData.batsmanHand}
                    onChange={handleChange}
                    className="border border-blue-500 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option value="">Select Hand</option>
                    <option value="right">Right Hand</option>
                    <option value="left">Left Hand</option>
                  </select>
                </div>
              )}

              {/* Conditional rendering for bowler options */}
              {formData.cricketExpertise === 'bowler' && (
                <>
                  <div className="w-full">
                    <label className="block text-gray-700 ">Bowler Hand:</label>
                    <select
                      name="bowlerHand"
                      value={formData.bowlerHand}
                      onChange={handleChange}
                      className="border border-blue-500 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select Arm</option>
                      <option value="right">Right Arm</option>
                      <option value="left">Left Arm</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block text-gray-700 ">Bowler Type:</label>
                    <select
                      name="bowlerType"
                      value={formData.bowlerType}
                      onChange={handleChange}
                      className="border border-blue-500 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="">Select Type</option>
                      <option value="fast">Fast</option>
                      <option value="spin">Spin</option>
                    </select>
                  </div>
                </>
              )}

              {/* Additional roles and Contact Type selection */}
              {formData.cricketExpertise === 'other' && (
                <>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="coach"
                        id="coach"
                        checked={formData.coach}
                        onChange={handleChange}
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="coach"
                        className="form-check-label text-gray-600"
                      >
                        Coach
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="analyst"
                        checked={formData.analyst}
                        onChange={handleChange}
                        id="analyst"
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="analyst"
                        className="form-check-label text-gray-600"
                      >
                        Analyst
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="trainer"
                        checked={formData.trainer}
                        onChange={handleChange}
                        id="trainer"
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="trainer"
                        className="form-check-label text-gray-600"
                      >
                        Trainer
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="physio"
                        id="physio"
                        checked={formData.physio}
                        onChange={handleChange}
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="physio"
                        className="form-check-label text-gray-600"
                      >
                        Physio
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="masseur"
                        id="masseur"
                        checked={formData.masseur}
                        onChange={handleChange}
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="masseur"
                        className="form-check-label text-gray-600"
                      >
                        Masseur
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="sportsPhysician"
                        id="sportsPhysician"
                        checked={formData.sportsPhysician}
                        onChange={handleChange}
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="sportsPhysician"
                        className="form-check-label text-gray-600"
                      >
                        Sports Physician
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="commentator"
                        checked={formData.commentator}
                        onChange={handleChange}
                        id="commentator"
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="commentator"
                        className="form-check-label text-gray-600"
                      >
                        Commentator
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="expertDressDesigner"
                        id="expertDressDesigner"
                        checked={formData.expertDressDesigner}
                        onChange={handleChange}
                        className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label
                        for="expertDressDesigner"
                        className="form-check-label text-gray-600"
                      >
                        Expert Dress Designer
                      </label>
                    </div>
                  </div>
                </>
              )}
              <div className="mt-4">
                <label className="block text-gray-700">Contact Type:</label>
                <select
                  name="contactType"
                  value={formData.contactType}
                  onChange={handleChange}
                  className="border border-blue-500 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select Type</option>
                  <option value="1year">1 Year</option>
                  <option value="3year">3 Year</option>
                </select>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-6">
              Describe your Cricket Career (In 150 words)
            </h3>
            <textarea
              name="cricketCareer"
              value={formData.cricketCareer}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              rows="4"
              placeholder="Describe your Cricket Career"
            ></textarea>

            <h3 className="text-xl font-bold mt-6">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="firstClassCricketer"
                  id="firstClassCricketer"
                  checked={formData.firstClassCricketer}
                  onChange={handleChange}
                  className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="firstClassCricketer"
                  className="form-check-label text-gray-600"
                >
                  Are you 1st Class Cricketer?
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="contract"
                  checked={formData.contract}
                  onChange={handleChange}
                  id="contract"
                  className="form-check-input mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  for="contract"
                  className="form-check-label text-gray-600"
                >
                  Have you any contract?
                </label>
              </div>
              <input
                type="text"
                name="majorAchievements"
                placeholder="Major Achievements"
                value={formData.majorAchievements}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="idealCricketer"
                placeholder="Ideal Cricketer"
                value={formData.idealCricketer}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="dreamGround"
                placeholder="Dream Ground"
                value={formData.dreamGround}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <h3 className="text-xl font-bold mt-6">Upload Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">
                  Upload CNIC Front:
                </label>
                <input
                  type="file"
                  name="cnicFront"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Upload CNIC Back:</label>
                <input
                  type="file"
                  name="cnicBack"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">
                  Upload Fee Submission:
                </label>
                <input
                  type="file"
                  name="feeSubmission"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Upload Picture:</label>
                <input
                  type="file"
                  name="picture"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="form-check mt-6">
              <input
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                id="flexCheckChecked"
              />
              <label
                className="form-check-label text-gray-600"
                htmlFor="flexCheckChecked"
              >
                I agree to the Terms and Conditions governing the use of Fuzio
                Terms
              </label>
            </div>
            <button className="btn btn-primary w-full mt-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Register
            </button>
          </form>
          <div className="login-message text-center mt-6">
            <p className="text-gray-600">
              Already a member?{' '}
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
