import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
import FoodWasteForm from '../components/FoodWasteForm';
import FoodWasteList from '../components/FoodWasteList';

export default function FoodWasteTracker() {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [entries, setEntries] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddEntry = async (e) => {
    e.preventDefault();
    if (!item.trim() || !amount.trim()) {
      alert('Please fill in both item and amount.');
      return;
    }
    setIsSubmitting(true);
    try {
      console.log('Adding new food waste entry:', { item, amount });
      const newEntry = {
        id: Date.now(),
        item: item.trim(),
        amount: amount.trim(),
      };
      setEntries([newEntry, ...entries]);
      setItem('');
      setAmount('');
      console.log('Entry added successfully.');
    } catch (error) {
      console.error('Error adding entry:', error);
      Sentry.captureException(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteEntry = (id) => {
    console.log('Deleting entry with id:', id);
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="h-full flex flex-col justify-between p-4">
      <div className="max-w-xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Food Waste Tracker</h1>
        <FoodWasteForm
          item={item}
          amount={amount}
          setItem={setItem}
          setAmount={setAmount}
          handleAddEntry={handleAddEntry}
          isSubmitting={isSubmitting}
        />
        <FoodWasteList
          entries={entries}
          handleDeleteEntry={handleDeleteEntry}
        />
      </div>
      <footer className="mt-8 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline cursor-pointer"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}