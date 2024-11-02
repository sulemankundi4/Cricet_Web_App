import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../assets/images/main-logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <nav className="bg-dark px-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to={'/'}>
            <img src={Logo} alt="Logo" className="h-28 w-28" />
          </Link>
          <button
            className="text-white lg:hidden"
            type="button"
            onClick={toggleMenu}
          >
            {isOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>

          <div
            className={`lg:flex ${
              isOpen ? 'block' : 'hidden'
            } w-full lg:w-auto`}
          >
            <ul className="navbar-nav text-2xl flex flex-col lg:flex-row lg:items-center lg:space-x-6 lg:mt-0">
              <li className="nav-item  nav-link text-white hover:text-gray-400">
                Home
              </li>
              <li className="nav-item  nav-link text-white hover:text-gray-400">
                About Us
              </li>
              <li className="nav-item  nav-link text-white hover:text-gray-400">
                Pages
              </li>
              <li className="nav-item  nav-link text-white hover:text-gray-400">
                Shop
              </li>
              <li className="nav-item nav-link text-white hover:text-gray-400">
                Blog
              </li>
              <li className="nav-item nav-link text-white hover:text-gray-400">
                Contact
              </li>
              <li className="nav-item">
                <button className="btn btn-gr p-2 w-40">Register</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
