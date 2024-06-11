import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useTheme } from './ThemeContext';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const { theme } = useTheme();

  const questions = [
    {
      question: 'How do I add an expense?',
      answer: 'You can add an expense by entering the expense name and amount, then clicking the "Add Expense" button.',
    },
    {
      question: 'Can I edit or delete an expense?',
      answer: 'Currently, the app does not support editing or deleting expenses. These features will be available in future updates.',
    },
    {
      question: 'How do I view the total amount spent?',
      answer: 'The total amount of all added expenses is displayed at the bottom of the expense list.',
    },
    {
      question: 'Is my data saved?',
      answer: 'This app currently does not save data persistently. Once you refresh the page, all data will be lost.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {questions.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-gray-100 dark:text-gray-300 bg-indigo-800 dark:bg-indigo-800 px-6 py-4 rounded-lg focus:outline-none transition"
              >
                <span>{item.question}</span>
                {openQuestion === index ? <BsChevronUp className="text-xl" /> : <BsChevronDown className="text-xl" />}
              </button>
              {openQuestion === index && (
                <div className={`overflow-hidden transition-max-h ease-in-out duration-300 px-6 py-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'}`}>
                  <p className="text-sm text-gray-800 dark:text-gray-200">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
