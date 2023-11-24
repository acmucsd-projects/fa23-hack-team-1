"use client";

import { useState } from "react";

export default function FilterBar() {
    const spanStyle = {
        padding: '1rem'
    }
    const inputStyle = {
        width: '3rem'
    }

    const [month, setMonth] = useState("");
    const [date, setDate] = useState("");
    const [year, setYear] = useState("");

    return (
        <div>
            <span style={spanStyle}>
                <>Month: </>
                <input type="text" style={inputStyle}
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}>
                </input>
            </span>
            <span style={spanStyle}>
                <>Day: </>
                <input type="text" style={inputStyle}
                    value={date}
                    onChange={(event) => setDate(event.target.value)}>
                </input>
            </span>
            <span style={spanStyle}>
                <>Year: </>
                <input type="text" style={inputStyle}
                    value={year}
                    onChange={(event) => setYear(event.target.value)}>
                </input>
            </span>
        </div>
    )
}
