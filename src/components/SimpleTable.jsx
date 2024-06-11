import React from 'react';

const SimpleTable = ({ expenses }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Expenses</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{expense.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">${expense.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
