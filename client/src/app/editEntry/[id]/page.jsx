import EditEntryForm from "@/components/EditEntryForm";

const getFoodItemById = async(id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/foodItems/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditEntry({params}) {
    const {id} = params;
    const {foodItem} = await getFoodItemById(id);
    const {name, amount, calories} = foodItem;
    return (
        <EditEntryForm id={id} name={name} amount={amount} calories={calories} />
    )
}
