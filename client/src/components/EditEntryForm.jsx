"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditEntryForm({id, name, amount, calories}) {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
    };
    const inputStyle = {
        border: '1px solid #64748B',
        padding: '0.5rem 2rem'
    };
    const buttonStyle = {
        
    };

    const [newName, setNewName] = useState(name);
    const [newAmount, setNewAmount] = useState(amount);
    const [newCalories, setNewCalories] = useState(calories);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/foodItems/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({newName, newAmount, newCalories}),
            });

            if (!res.ok) {
                throw new Error('Failed to update Food Item')
            }

            router.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                onChange={e => setNewName(e.target.value)}
                value={newName}
                style={inputStyle}
                type="text"
                placeholder="edit Food Item Name"
            />
            <input
                onChange={e => setNewAmount(e.target.value)}
                value={newAmount}
                style={inputStyle}
                type="text"
                placeholder="edit Amount"
            />
            <input
                onChange={e => setNewCalories(e.target.value)}
                value={newCalories}
                style={inputStyle}
                type="text"
                placeholder="edit Calories"
            />
            <button>
                Edit Food Item
            </button>
        </form>
    )
}
