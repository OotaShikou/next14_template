"use server";
import { getSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createLog(formData: FormData) {
  console.log(formData);
}
// export const addTodo = async (data: FormData) => {
//   const name = data.get('name') as string;
//   await prisma.user.create({ data: { name } });
//   revalidatePath('/todos');
// };
