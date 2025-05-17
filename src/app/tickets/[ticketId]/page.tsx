import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { Ticket } from "@prisma/client";
import { notFound } from "next/navigation";

type TicketPageParams = Promise<{ ticketId: string }>;

const TicketPage = async (props: { params: TicketPageParams }) => {
  const { ticketId } = await props.params;
  const ticket = await t(ticketId);

  if (!ticket) {
    return notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket as Ticket} isDetail />
    </div>
  );
};

export default TicketPage;
