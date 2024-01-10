// RemoveBtn.jsx

import React, { useState } from 'react';
import API from '../../api/API';
import styles from './removebutton.module.css';

export default function RemoveBtn({ dateId, foodId, onRemove }) {
  const [confirming, setConfirming] = useState(false);

  const removeFoodItem = async () => {
    try {
      await API.removeFood(dateId, foodId);
      onRemove(foodId);
      setConfirming(false);
    } catch (error) {
      console.error(`Error removing food item: ${error.message}`);
    }
  };

  return (
    <div>
      {confirming ? (
        <div className={styles.confirmationContainer}>
          <p className={styles.confirmationMessage}>Confirm deletion?</p>
          <button onClick={removeFoodItem} className={styles.confirmationButton}>
            Yes
          </button>
          <button onClick={() => setConfirming(false)} className={styles.confirmationButton}>
            No
          </button>
        </div>
      ) : (
        <button onClick={() => setConfirming(true)} className={styles.removeButton}>
          delete
        </button>
      )}
    </div>
  );
}
