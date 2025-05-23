"use server";

import {
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { getAuthOrRedirect } from "@/features/auth/queries/get-auth-or-redirect";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";
import { TicketStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateTicketStatus = async (id: string, status: TicketStatus) => {
  const {user} = await getAuthOrRedirect()// simulate network delay

  try {
    const ticket = await prisma.ticket.findUnique({
      where: {
        id
      }
    })

    if(!ticket || !isOwner(user, ticket)) {
      return toActionState("ERROR", "Not authorized")
    }

    // db logic
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
