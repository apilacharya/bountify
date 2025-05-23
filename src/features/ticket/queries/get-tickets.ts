import { Ticket } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type TicketWithUser = Ticket & {
  user: {
    username: string;
  };
};

export const getTickets = async (): Promise<TicketWithUser[]> => {
  return await prisma.ticket.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });
};
