import { Ticket } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const tickets = [
  {
    title: "Ticket 1",
    content:
      "This is the first ticket lorem ipsum dolor sit amet lorem ipsum dolor sit amet from database",
    status: "DONE",
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from database",
    status: "OPEN",
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from database",
    status: "IN_PROGRESS",
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB SEED: STARTED...");
  await prisma.ticket.deleteMany({});
  await prisma.ticket.createMany({
    data: tickets as Ticket[],
  });
  const t1 = performance.now();
  console.log("DB SEED: FINISHED in " + (t1 - t0) + " milliseconds");
};

seed();
