import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";
import { SearchInput } from "@/components/search-input";

type TicketListProps = {
  userId?: string;
};

const TicketList = async ({ userId }: TicketListProps) => {
  const tickets = await getTickets(userId);
  return (
    <div className="flex flex-1 flex-col gap-y-4 items-center animate-fade-in-from-top">
      <div className="w-full max-w-[420px]">
        <SearchInput placeholder="Search tickets..." />
      </div>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export { TicketList };
