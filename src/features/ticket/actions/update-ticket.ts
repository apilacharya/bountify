"use server";

import {
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay
  try {
    await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  } catch (error) {
    return formErrorToActionState(error);
  }

  revalidatePath(ticketsPath()); // here only ticketspath is validated but the change is seen across the individual ticketid page too because /tickets is the parent route so once parent route is validated its child route is also revalidated with new cache items
  // revalidatePath(ticketPath(id)) // this is not required because ticketPath is dynamically rendered by next by default
  return toActionState("SUCCESS", "Status updated");
};
