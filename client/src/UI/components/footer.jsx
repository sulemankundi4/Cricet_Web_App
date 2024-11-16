import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import Logo from '../../assets/images/main-logo.png'; // Adjust the path to your logo
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src={Logo} alt="Logo" className="h-30 w-40" />
          </div>
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-xl font-semibold">About Us</p>
            <p className="text-base">
              At All Star Cricket Management we help cricketers achieve their
              goals. We offer services like player management, coaching, talent
              scouting, career guidance, sponsorships, and league contracts.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-xl font-semibold">Follow Us</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6  text-center text-base">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} All Star . All rights reserved.
            <li>
              <Link
                to="/sign-in"
                className="block py-2 px-3 md:p-0 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0"
              >
                Login
              </Link>
            </li>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
