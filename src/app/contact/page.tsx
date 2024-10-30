"use client";
import React, { useState } from 'react';
import Navbar from '../navbar/page';
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName('');
    setEmail('');
    setMessage('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div>
      <Navbar />
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white hover:bg-pink-200 max-w-xl w-full shadow-2xl rounded-3xl p-10 md:p-16 mt-10">
        <h2 className="text-4xl font-extrabold text-purple-950 mb-6 text-center">Get in Touch</h2>
        
        {success && (
          <p className="text-green-950 bg-slate-200 p-3 rounded-md mb-6 text-center font-semibold">
            Your message has been sent successfully!
          </p>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <AiOutlineUser className="absolute left-3 top-3 text-xl text-purple-950" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your Name"
              className="pl-10 pr-4 py-3 w-full border border-purple-950 rounded-full shadow-md focus:outline-none focus:border-purple-950 focus:ring-2 focus:ring-purple-200 transition text-lg"
            />
          </div>
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-3 text-xl text-purple-950" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your Email"
              className="pl-10 pr-4 py-3 w-full border border-purple-950 rounded-full shadow-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition text-lg"
            />
          </div>
          <div className="relative">
            <AiOutlineMessage className="absolute left-3 top-3 text-xl text-purple-950" />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="Your Message"
              className="pl-10 pr-4 py-3 w-full border border-purple-950 rounded-2xl shadow-md focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition text-lg resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-950 text-white font-bold rounded-full hover:bg-purple-700 transition duration-300 text-lg shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
