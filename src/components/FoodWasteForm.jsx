import React from 'react';

export default function FoodWasteForm({ item, amount, setItem, setAmount, handleAddEntry, isSubmitting }) {
  return (
    <form onSubmit={handleAddEntry} className="space-y-4">
      <div>
        <label htmlFor="item" className="block font-medium mb-1">Item</label>
        <input
          id="item"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded box-border"
          placeholder="Enter food item"
        />
      </div>
      <div>
        <label htmlFor="amount" className="block font-medium mb-1">Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded box-border"
          placeholder="Enter amount (e.g., grams)"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded cursor-pointer disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Adding...' : 'Add Entry'}
      </button>
    </form>
  );
}