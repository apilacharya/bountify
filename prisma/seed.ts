import { Ticket } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { hash } from "@node-rs/argon2";

const users = [
  {
    username: "admin",
    email: "admin@gmail.com",
  },
  {
    username: "user",
    email: "connectwithapil@gmail.com",
  },
];

const tickets = [
  {
    title: "Ticket 1",
    content:
      "This is the first ticket lorem ipsum dolor sit amet lorem ipsum dolor sit amet from database",
    status: "DONE" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 102,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from database",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 405,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from database",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 999,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("Seeding database...");
  await prisma.user.deleteMany({});
  await prisma.ticket.deleteMany({});

  const passwordHash = await hash("geheimnis");
  const dbUsers = await prisma.user.createManyAndReturn({
    data: users.map((user) => ({
      ...user,
      passwordHash: passwordHash,
    })),
  });
  await prisma.ticket.createMany({
    data: tickets.map((ticket) => ({
      ...ticket,
      userId: dbUsers[0].id,
    })) as Ticket[],
  });

  const t1 = performance.now();
  console.log("Seeding tickets took " + (t1 - t0) + " milliseconds.");
};

seed();
