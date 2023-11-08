"use client";

import {useState} from 'react';
import {useRouter} from 'next/navigation';

export default function AddEntry() {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    };
    const inputStyle = {
        border: '1px solid #64748B',
        padding: '0.5rem 2rem'
    }
    const buttonStyle = {
        
    }

    const router = useRouter();

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !calories) {
            alert("Name and calories are required.");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/foodItems', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({name, amount, calories}),
            });

            if (res.ok) {
                router.push('/');
            } else {
                throw new Error("Failed to create a topic");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                style={inputStyle}
                type="text"
                placeholder="Food Item Name"
            />
            <input
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                style={inputStyle}
                type="text"
                placeholder="(optional) Amount"
            />
            <input
                onChange={(e) => setCalories(e.target.value)}
                value={calories}
                style={inputStyle}
                type="text"
                placeholder="Calories"
            />
            <button type="submit">
                Add Food Item
            </button>
        </form>
    )
}
