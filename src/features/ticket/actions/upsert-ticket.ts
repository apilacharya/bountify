"use server";

import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ActionState,
  formErrorToActionState,
  toActionState,
} from "@/components/form/utils/to-action-state";
import { z } from "zod";

const upsertTicketSchema = z.object({
  title: z.string().min(1).max(191),
  content: z.string().min(1).max(1024),
});

export const upsertTicket = async (
  id: string | undefined,
  _actionState: ActionState,
  formData: FormData
) => {
  try {
    const data = upsertTicketSchema.parse({
      title: formData.get("title"),
      content: formData.get("content"),
    });

    // db logic
    await prisma.ticket.upsert({
      where: {
        id: id || "undefined",
      },
      update: data,
      create: data,
    });
  } catch (error) {
    return formErrorToActionState(error, formData);
  }

  revalidatePath(ticketsPath());

  //   here revalidating the ticketpath is not required because ticketPath is dynamically rendered by next by default

  if (id) {
    redirect(ticketPath(id));
  }
  return toActionState("SUCCESS", "Ticket created successfully");
};
