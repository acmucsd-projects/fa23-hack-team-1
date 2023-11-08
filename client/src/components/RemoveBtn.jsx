"use client";

import {useRouter} from 'next/navigation';

export default function RemoveBtn({id}) {
    const buttonStyle = {
        //find out how to style a button
    }

    const router = useRouter();

    const removeFoodItem = async() => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/foodItems?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };

    return <button onClick={removeFoodItem} style={buttonStyle}>delete</button>;
}
