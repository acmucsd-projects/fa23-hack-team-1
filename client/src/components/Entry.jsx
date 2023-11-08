"use client";

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

//all styles are modularized here
import './Entry.css';
//import {useState, useEffect} from 'react';

const getFoodItems = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/foodItems', {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error('Failed to fetch foodItems');
        }

        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
}

export default async function Entry() {
    
    const containerStyle = { 
        padding: '1rem',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#718096',
        marginTop: '0.75rem',
        marginBottom: '0.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '1.25rem'
    }
    const titleStyle = {
        fontWeight: '700',
        fontSize: '1.5rem'
    }
    const editStyle = {
        textDecoration: 'none'
    }

    const {foodItems} = await getFoodItems();

    return (
        <>
        {foodItems.map(t => (
            <div style={containerStyle}>
                <div>
                    <h2 style={titleStyle}>{t.name}</h2>
                    <div>{t.amount}</div>
                    <div>{t.calories} calories</div>
                </div>

                <div>
                    <RemoveBtn id={t._id} />
                    <Link style={editStyle} href={`/editEntry/${t._id}`}>
                        edit
                    </Link>
                </div>
            </div>
        ))}
        </>
    )
}
