import { PrismaClient } from "@/app/generated/prisma";
const globalForPrisma = global;
export const Prisma = globalForPrisma.prisma||new PrismaClient();
if(process.env.NODE_ENV!=="production")globalForPrisma.prisma = Prisma;
