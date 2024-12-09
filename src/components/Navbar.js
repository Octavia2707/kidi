import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom untuk navigasi

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto flex justify-center items-center py-6 z-50">
      <ul className="flex gap-10 text-xl text-white text-lg font-Judson">
        <li>
          <Link to="/login" className="hover:text-rose-300 cursor-pointer">
            Login
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-rose-300 cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-rose-300 cursor-pointer">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/catalog" className="hover:text-rose-300 cursor-pointer">
            Katalog
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-rose-300 cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
