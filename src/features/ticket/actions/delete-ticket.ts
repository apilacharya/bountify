"use server";
import { setCokkieByKey } from "@/actions/cookies";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: { id },
  });

  revalidatePath(ticketsPath());
  setCokkieByKey('toast', 'Ticket deleted')
  redirect(ticketsPath());
};
