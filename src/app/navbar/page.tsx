import Link from 'next/link';
import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { PiReadCvLogo } from 'react-icons/pi';

const Navbar = () => {
  return (
    <div className="mx-6 rounded-2xl bg-pink-200 shadow-lg">
      <nav className="flex flex-col md:flex-row items-center justify-between px-4 py-3 md:px-6 md:py-2 mx-auto max-w-screen-lg rounded-full mt-2">
        
        {/* Logo/Title Section */}
        <div className="text-2xl font-semibold text-purple-950 font-serif">
          GIAIC
        </div>
        
        {/* Name Section */}
        <div className="text-2xl font-serif font-semibold text-purple-950  mt-2 md:mt-0">
          AMMARA RAJPUT
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-6 px-2 md:px-4 text-2xl text-purple-950  mt-2 md:mt-0">
          <Link href="/">
            <FaHome className="hover:text-white transition duration-200" />
          </Link>
          <Link href="/about">
            <PiReadCvLogo className="hover:text-white transition duration-200" />
          </Link>
          <Link href="/Projects">
            <AiOutlineFundProjectionScreen className="hover:text-white  transition duration-200" />
          </Link>
          <Link href="/contact">
            <BsTelephoneForward className="hover:text-white  transition duration-200" />
          </Link>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
