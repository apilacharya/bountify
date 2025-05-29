import { prisma } from "@/lib/prisma";
import { SearchParams } from "../search-params";

export const getTickets = async (
  userId: string | undefined,
  searchParams: SearchParams
) => {
  const params = await searchParams;
  return await prisma.ticket.findMany({
    where: {
      userId,
      ...(typeof params.search === "string" && {
        title: {
          contains: params.search,
          mode: "insensitive",
        },
      }),
    },
    orderBy: {
      // createdAt: "desc",
      ...(params.sort === "undefined" && { createdAt: "desc" }),
      ...(params.sort === "bounty" && { bounty: "desc" }),
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
