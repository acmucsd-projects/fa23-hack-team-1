import React, { useState } from 'react';
import Calendar from 'react-calendar';
import API from '../../api/API';
//import 'reacxt-calendar/dist/Calendar.css';
import styles from './calendar.module.css';
const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const onClickDay = (value, event) => {
        API.getFood().then((response) => {
        console.log('Response from getFood:', response.data);
        
        // Handle the data as needed
        })
        .catch((error) => {
        console.error('Error calling getFood:', error);
        // Handle the error as needed
        });
    }
    return (
        <div className={styles['react-calendar']}>
            <Calendar 
            onChange={onChange} 
            value={date}
            onClickDay={onClickDay}
            />
        </div>
    );
};

export default MyCalendar;