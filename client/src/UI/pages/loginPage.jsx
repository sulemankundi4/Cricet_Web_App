import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/cricket/admin/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        toast.success('Logged in successfully');
        navigate('/'); // Redirect to admin dashboard
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="account-sec py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Login</h2>
              <p className="text-gray-600">
                Please login to access your account.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="password"
                    placeholder="Password*"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="btn btn-primary w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  Login
                </button>
              </form>
              <div className="login-message text-center mt-6">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <a className="text-blue-500 hover:underline" href="/sign-up">
                    Register Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
