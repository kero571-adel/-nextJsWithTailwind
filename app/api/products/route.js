import { NextResponse } from "next/server";
import schema from "./schema";
import { Prisma } from "@/prisma/client";

export async function GET(request){
    const product = await Prisma.product.findMany()
//  return NextResponse.json([
//     {id:"1",name:"kero"},
//     {id:"2",name:"kero2"},
//     {id:"3",name:"kero3"}
//  ])
return NextResponse.json(product);
}
export async function POST(request) {
    const body = await request.json();

    if (!body.name || !body.price) {
        return NextResponse.json({ error: "name and price are required" }, { status: 400 });
    }

    const product = await Prisma.product.findUnique({
        where: { name: body.name }
    });

    if (product) {
        return NextResponse.json({ error: "the product already exists" }, { status: 400 });
    }
    const newProduct = await Prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    });

    return NextResponse.json(newProduct, { status: 200 });
}
