import { accountProfilePath, homePath, ticketsPath } from "@/paths";
import { NavItem } from "./types";
import { LucideLibrary, LucideBook, LucideCircleUser } from "lucide-react";

export const navItems: NavItem[] = [
  {
    title: "All Ticket",
    icon: <LucideLibrary />,
    href: homePath(),
  },
  {
    title: "My Tickets",
    icon: <LucideBook />,
    href: ticketsPath(),
  },
  {
    separator: true,
    title: "Account",
    icon: <LucideCircleUser/>,
    href: accountProfilePath()
  }
];

export const closedClassName =
  "text-background opacity-0 group-hover:z-40 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100";
