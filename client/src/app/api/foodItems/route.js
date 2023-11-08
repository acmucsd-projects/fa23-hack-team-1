import connectMongoDB from "@/libs/mongodb";
import FoodItem from "@/models/foodItem";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {name, amount, calories} = await request.json();
    await connectMongoDB();
    await FoodItem.create({name, amount, calories});
    return NextResponse.json({message: "Food Item Created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const foodItems = await FoodItem.find();
    return NextResponse.json({foodItems});
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await FoodItem.findByIdAndDelete(id);
    return NextResponse.json({message: "Food Item deleted"}, {status: 200});
}
