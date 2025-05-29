import { prisma } from "@/lib/prisma";
import { ParsedSearchParams } from "../search-params";

export const getTickets = async (
  userId: string | undefined,
  searchParams: ParsedSearchParams
) => {
  const params = await searchParams;
  return await prisma.ticket.findMany({
    where: {
      userId,
      title: {
        contains: params.search,
        mode: "insensitive",
      },
    },
    orderBy: {
      ...(params.sort === "newest" && { createdAt: "desc" }),
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
