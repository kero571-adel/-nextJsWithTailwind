import { NextResponse } from "next/server";
//import schema from "../schema";
import { Prisma } from "@/prisma/client";
export async function GET(request,{params}) {
  const user = await Prisma.user.findUnique({
    where:{id:Number(params.id)}
  });
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }  
  return NextResponse.json(user) 
}

export async function PUT(request,{params}) {
    // let validation = schema.safeParse(body);
    // if(!validation.success){
    //   return NextResponse.json(validation.error.errors,{status:404});
    // }
    const body =  await request.json();
    const user = await Prisma.user.findUnique({
      where:{id:Number(params.id)}
    });
    if(!user){
      return NextResponse.json(user,{status:400});
    }
    const editUser =await Prisma.user.update({
      where:{id:Number(params.id)},
      data:{
        name: body.name,
        email: body.email
      }
    });
    return NextResponse.json(editUser,{status:200});
} 
export async function DELETE(request,{params}) {
  const user = await Prisma.user.findUnique({
    where:{id:Number(params.id)}
  });
    if(!user){
      return NextResponse.json("the user is not found",{status:404}) 
    }
    const delUser = await Prisma.user.delete({
      where:{id:Number(params.id)},
    });
    return NextResponse.json({}) 
}