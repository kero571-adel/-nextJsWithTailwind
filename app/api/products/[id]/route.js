import { Prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
export async function GET(request,{params}) {
  const product = await Prisma.product.findUnique({
    where:{id:Number(params.id)}
  })
  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }  
  return NextResponse.json(product);
}
export async function PUT(request,{params}) {
  const body = await request.json();
  const product = await Prisma.product.findUnique({
    where:{id:Number(params.id)}
  })
  if(!product){
    return NextResponse.json("the user is not found") 
  }
  const editProduct = await Prisma.product.update({
    where:{id:Number(params.id)},
    data:{
      name:body.name,
      price:body.price
    }
  })
  return NextResponse.json(editProduct,{status:200}) 
}
export async function DELETE(request,{params}) {
  const product = await Prisma.product.findUnique({
    where:{id:Number(params.id)}
  })
    if(!product){
      return NextResponse.json("the user is not found") 
    }
    const delProduct = await Prisma.product.delete({
      where:{id:Number(params.id)}
    })
    return NextResponse.json({}) 
}