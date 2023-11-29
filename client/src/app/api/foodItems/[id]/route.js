import connectMongoDB from "@/libs/mongodb";
import FoodItem from "@/models/foodItem";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {newName: name, newAmount: amount, newCalories: calories} = await request.json();
    console.log(name, amount, calories);
    await connectMongoDB();
    await FoodItem.findByIdAndUpdate(id, {name, amount, calories});
    return NextResponse.json({message: "Topic updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const foodItem = await FoodItem.findOne({_id: id});
    return NextResponse.json({foodItem}, {status: 200});
}
