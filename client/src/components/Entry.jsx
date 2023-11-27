"use client";

import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

//all styles are modularized here
import './Entry.css';
import {useState, useEffect} from 'react';



export default function Entry() {
    
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
    const spanStyle = {
        padding: '1rem'
    }
    const inputStyle = {
        width: '3rem'
    }

    const [{foodItems}, setFoodItems] = useState({ foodItems: []});

    const [filteredItems, setFilteredItems] = useState([]);

    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
    const [year, setYear] = useState("");

    //let toDisplay = [...foodItems];

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/foodItems', {
                    cache: "no-store",
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch foodItems');
                }

                const data = await res.json();
                setFoodItems(data);
            } catch (error) {
                console.log("Error loading foodItems: ", error);
            }
        };

        fetchFoodItems();
    }, []);

    useEffect(() => {
        let filtered = foodItems;

        if (month !== '') {
            filtered = filtered.filter((entry) => entry.month === Number(month));
        }
        if (date !== '') {
            filtered = filtered.filter((entry) => entry.date === Number(date));
        }
        if (year !== '') {
            filtered = filtered.filter((entry) => entry.year === Number(year));
        }
        
        setFilteredItems(filtered);
    }, [month, date, year, foodItems]);

    const toDisplay = filteredItems.length ? filteredItems : foodItems;
    const dest = [...toDisplay]

    return (
        <>
        <div>
            <span style={spanStyle}>
                <>Month: </>
                <input type="text" style={inputStyle}
                    value={month}
                    onChange={(event) => {
                        setMonth(event.target.value)
                        console.log(event.target.value)
                    }}>
                </input>
                <>Date: </>
                <input type="text" style={inputStyle}
                    value={date}
                    onChange={(event) => {
                        setDate(event.target.value)
                        console.log(event.target.value)
                    }}>
                </input>
                <>Year: </>
                <input type="text" style={inputStyle}
                    value={year}
                    onChange={(event) => {
                        setYear(event.target.value)
                        console.log(event.target.value)
                    }}>
                </input>
            </span>
        </div>
        {dest.map(t => (
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
