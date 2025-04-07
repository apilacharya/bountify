import { CardCompact } from "@/components/card-compact";

import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketEditPageProps = Promise<{ ticketId: string }>;

const TicketEditPage = async (props: { params: TicketEditPageProps }) => {
  const { ticketId } = await props.params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    return notFound();
  }

  return (
    <div>
      <CardCompact
        title="Edit Ticket"
        description="Edit an existing ticket"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<TicketUpsertForm ticket={ticket} />}
      />
    </div>
  );
};

export default TicketEditPage;
