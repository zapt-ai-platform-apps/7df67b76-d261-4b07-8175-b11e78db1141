import React from 'react';

export default function FoodWasteList({ entries, handleDeleteEntry }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Entries</h2>
      {entries.length === 0 ? (
        <p className="text-gray-600">No entries recorded yet.</p>
      ) : (
        <ul className="space-y-3">
          {entries.map((entry) => (
            <li key={entry.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
              <div>
                <p className="font-medium">{entry.item}</p>
                <p className="text-sm text-gray-500">Amount: {entry.amount}</p>
              </div>
              <button
                onClick={() => handleDeleteEntry(entry.id)}
                className="py-1 px-3 bg-red-500 text-white rounded cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}