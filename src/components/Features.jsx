import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Two Taps to Track Your Stacks</h3>
            <p className="text-gray-600 dark:text-gray-400">Forget clunky expense trackers! Our app boasts a beautifully simple interface. Imagine this: just two crystal-clear fields - one for your expense name (groceries, rent, that latte!), and another for the amount in Rupees. Easy as pie, right? Now go forth and conquer your finances!</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Effortless Expense Entry</h3>
            <p className="text-gray-600 dark:text-gray-400"> Ditch the spreadsheets! Our app makes expense tracking a breeze. Enter expense names and amounts (in Rupees) - our clean interface keeps it simple. Watch your total update instantly for real-time spending insights. It's like having a pocket-sized financial guru.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Know Where Your Money Goes</h3>
            <p className="text-gray-600 dark:text-gray-400">No more number crunching! Our app automatically keeps track of your spending. Just enter your expenses, and watch as the total amount magically updates, giving you a crystal-clear picture of your finances at a glance. It's like having a built-in financial advisor whispering your spending habits in your ear.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
