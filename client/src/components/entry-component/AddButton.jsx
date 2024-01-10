import React, { useState } from 'react';
import API from '../../api/API';
import styles from './addbutton.module.css'

const AddFoodItemForm = ({ apiDate, onAddFoodItem }) => {
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodAmount, setNewFoodAmount] = useState('');
  const [newFoodCalories, setNewFoodCalories] = useState('');

  const handleNameChange = (e) => {
    setNewFoodName(e.target.value);
  };

  const handleAmountChange = (e) => {
    setNewFoodAmount(e.target.value);
  };

  const handleCaloriesChange = (e) => {
    setNewFoodCalories(e.target.value);
  };

  const handleAddFoodItem = async () => {    
    // Validation: Check if all three fields are filled
    if (!newFoodName || !newFoodAmount || !newFoodCalories) {
      alert('Please fill in all fields before adding a food item.');
      return;
    }

    const newFoodItem = {
      name: newFoodName,
      amount: newFoodAmount,
      calories: parseFloat(newFoodCalories),
    };
    try {
      // Assuming apiDate is an object with properties like month, day, and year
        
      const response = await API.postFood(apiDate.month, apiDate.day, apiDate.year, newFoodItem);
      onAddFoodItem(response); // Notify the parent component about the addition
      // Clear input fields
      setNewFoodName('');
      setNewFoodAmount('');
      setNewFoodCalories('');
    } catch (error) {
      console.error('Error!!!: ', error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Food Name"
        value={newFoodName}
        onChange={handleNameChange}
        className={styles.inputField}
      />
      <input
        type="text"
        placeholder="Amount"
        value={newFoodAmount}
        onChange={handleAmountChange}
        className={styles.inputField}
      />
      <input
        type="text"
        placeholder="Calories"
        value={newFoodCalories}
        onChange={handleCaloriesChange}
        className={styles.inputField}
      />
      <button onClick={handleAddFoodItem} className={styles.addButton}>
        Add Food Item
      </button>
    </div>
  );
};

export default AddFoodItemForm;
