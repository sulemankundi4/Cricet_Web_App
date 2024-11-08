import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../assets/images/main-logo.png';
import { Link } from 'react-router-dom';
import { isAuthenticated } from './../utils/Auth';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getAllCookies = () => {
    const cookies = document.cookie.split(';');
    const cookieObj = {};
    cookies.forEach((cookie) => {
      const [key, value] = cookie.split('=');
      cookieObj[key.trim()] = value;
    });
    return cookieObj;
  };

  const check = getAllCookies();
  console.log(check);

  return (
    <nav className="border-gray-200  bg-black">
      <div className="max-w-screen-xl w-[94%] mx-auto flex flex-wrap items-center justify-between p-2">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} alt="Logo" className="h-28 w-28" />
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <IoMdClose className="w-5 h-5" />
          ) : (
            <GiHamburgerMenu className="w-5 h-5" />
          )}
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-players"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 "
              >
                All Players
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 "
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 "
              >
                Contact
              </Link>
            </li>

            {isAuthenticated() ? (
              <li>
                <Link
                  to="/dashboard"
                  className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 "
                >
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/sign-in"
                  className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 "
                >
                  Login
                </Link>
              </li>
            )}

            {isAuthenticated() ? (
              <li className="nav-item mt-2 lg:mt-0">
                <Link to="/dashboard" className="text-white">
                  <FaUser size={24} />
                </Link>
              </li>
            ) : (
              <li className="nav-item lg:mt-0">
                <Link
                  to="/sign-up"
                  className="btn btn-gr p-2 w-40 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
