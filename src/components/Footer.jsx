import React from 'react';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${theme === 'dark' ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'}`}
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Developer Info Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">About Me</h2>
            <p className="text-sm mb-4">
            My name is Aditya Jethwa, a 6th semester Information Technology Engineering student at Devang Patel Institute of Advanced Technology and Research (DEPSTAR), affiliated with Charotar University of Science and Technology (CHARUSAT) University. This past summer (2024), I had the opportunity to intern at iNeuron Intelligence Pvt Ltd. As part of my internship, I developed an Money Tracker App using React.js and Tailwind CSS.
            </p>
            <p className="text-sm mb-4">
            I am passionate about exploring technology and creating impactful solutions. This summer (2024), I interned at iNeuron Intelligence Pvt Ltd, developing an Expense Tracker App with React.js and Tailwind CSS, enhancing my front-end development and user experience design skills.
            </p>
            <p className="text-sm mb-4">
            The Money Tracker App empowers users to take control of their finances by offering a convenient and insightful platform for tracking income and expenses. It fosters responsible spending habits and promotes financial awareness.
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/adityajethwa7/iNeuron-Summer-Internship2024-ExpenseTracker"
                  className="text-sm hover:text-indigo-800 transition duration-300"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aditya-jethwa-097265238/"
                  className="text-sm hover:text-indigo-800 transition duration-300"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Vertical Space */}
        <div className="my-8" />

        {/* Footer Links Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <ul className="flex space-x-4 mb-4 md:mb-0">
              <li>
                <a href="#" className="text-sm hover:text-indigo-800 transition duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-indigo-800 transition duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-indigo-800 transition duration-300">Contact Us</a>
              </li>
            </ul>
            <p className="text-sm">&copy; 2024 Money Tracker App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
