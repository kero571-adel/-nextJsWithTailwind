import { NextResponse } from "next/server";
//import schema from "./schema";
import { Prisma } from "@/prisma/client";
export async function GET(request) {
  const users = await Prisma.user.findMany();
  return NextResponse.json(users) 
}
export async function POST(request) {
  const body =  await request.json();
  //let validation = schema.safeParse(body);
  if(!body.name){
    return NextResponse.json({error:"name is requird"},{status:400});
  }
  const users = await Prisma.user.findUnique({
    where:{email:body.email}
  });
  if(!users){
    return NextResponse.json("the user is alerdy exists",{status:400});
  }
  const newUser = await Prisma.user.create({
    data:{
      name:body.name,
      email:body.email
    }
  })
  return NextResponse.json(newUser,{status:201});
}
