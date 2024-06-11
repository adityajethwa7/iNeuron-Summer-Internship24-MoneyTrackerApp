import React from 'react';
import { useTheme } from './ThemeContext';

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Track Your Expenses <br />Effortlessly
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Take control of your finances with our easy-to-use expense tracker app. Keep track of your spending, create custom categories, and gain valuable insights.
          </p>
          <a
            href="#"
            className="bg-indigo-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-900 transition duration-300"
          >
            Get Started
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className={`p-6 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="inline-block bg-white rounded-full p-2 mr-2 text-indigo-700">
                  ✓
                </span>
                Simple and intuitive interface
              </li>
              <li className="flex items-center">
                <span className="inline-block bg-white rounded-full p-2 mr-2 text-indigo-700">
                  ✓
                </span>
                Customizable categories
              </li>
              <li className="flex items-center">
                <span className="inline-block bg-white rounded-full p-2 mr-2 text-indigo-700">
                  ✓
                </span>
                Detailed reports and insights
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
