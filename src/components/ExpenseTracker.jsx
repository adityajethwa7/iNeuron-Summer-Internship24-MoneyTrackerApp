import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (name && amount) {
      setExpenses([...expenses, { name, amount: parseFloat(amount) }]);
      setName('');
      setAmount('');
    }
  };

  const getTotalAmount = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-5">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl max-w-md w-full transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-800 dark:text-white">Money Tracker App</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Expense Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter expense name"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter amount"
            />
          </div>
          <button
            onClick={addExpense}
            className="w-full flex items-center justify-center bg-indigo-800 text-white py-2 rounded-lg hover:bg-indigo-900 transition"
          >
            <AiOutlinePlusCircle className="mr-2" /> Add Expense
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-300">Total Amount: ₹{getTotalAmount().toFixed(2)}</h2>
          <ul className="mt-4 space-y-4">
            {expenses.map((expense, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm transition transform hover:scale-105"
              >
                <span className="font-medium text-gray-700 dark:text-gray-300">{expense.name}</span>
                <span className="font-semibold text-gray-900 dark:text-gray-100">₹{expense.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
