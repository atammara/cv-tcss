import React from 'react';
import Navbar from './navbar/page';
import Image from 'next/image';
import { MdCode } from 'react-icons/md';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { GiTeacher } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div className="min-h-screen text-gray-900">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Container */}
      <div className="p-4 md:p-10">

        {/* Title Section */}
        <div className="p-8 bg-slate-300 rounded-3xl shadow-lg mt-4">
          <div className="text-center">
            <h1 className="font-bold text-3xl text-purple-950 font-serif">ABOUT ME</h1>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center md:gap-y-0 md:p-6 md:gap-x-16 mx-11 mt-4">
            {/* Text Content Box */}
            <div className="bg-white mx-4 md:mx-0 hover:bg-pink-200 p-8 rounded-3xl shadow-md text-center md:text-left transition duration-300 hover:shadow-xl md:w-3/5 lg:w-1/2">
              <h2 className="font-bold font-serif text-2xl">
                I am a Web Developer skilled in creating responsive designs, dedicated to continuous learning.
              </h2>
              <p className="text-lg leading-relaxed text-gray-800 font-serif mt-4">
                Currently pursuing an IT diploma from GIAIC. With over a year of experience in Web Development, I focus on creating responsive, modern websites using HTML, CSS, JavaScript, Tailwind CSS, and Next.js.
              </p>
            </div>

            {/* Image Content Box */}
            <div className="flex-grow rounded-3xl overflow-hidden flex items-center justify-center md:w-2/5 lg:w-1/2 max-w-xs md:max-w-none">
              <Image
                src="/girl.png"
                alt="Picture of me"
                width={260} // Adjust width and height here
                height={300}
                className="object-cover bg-white rounded-3xl hover:bg-pink-200"
              />
            </div>


          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="mt-8 p-8 bg-slate-300 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-purple-950 mb-6 font-serif">My Value Proposition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-serif">
            {[
              { Icon: MdCode, title: 'Aspiring Web Developer', about: 'Focused on responsive websites using Tailwind CSS and Next.js.' },
              { Icon: AiOutlineAntDesign, title: 'UI/UX Designer', about: 'Creating stunning UIs in Figma for a smooth user experience.' },
              { Icon: RiComputerLine, title: 'Proficient in MS Office', about: 'Experienced in MS Word, Excel, and PowerPoint.' },
              { Icon: GiTeacher, title: 'Coding & Teaching Enthusiast', about: 'Enjoy teaching and coding as a hobby.' },
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white rounded-3xl p-6 hover:bg-pink-200 transition-shadow duration-300 shadow-md hover:shadow-lg">
                <item.Icon className="text-5xl md:text-6xl text-purple-950 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-950">{item.title}</h3>
                  <p className="text-gray-700">{item.about}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
