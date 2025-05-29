import { Heading } from "@/components/heading";

import { CardCompact } from "@/components/card-compact";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getAuth } from "@/features/auth/queries/get-auth";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Suspense } from "react";
import { SearchParams } from "@/features/ticket/search-params";

type TicketPageProps = {
  searchParams: SearchParams;
};

const TicketsPage = async ({ searchParams }: TicketPageProps) => {
  const { user } = await getAuth();

  return (
    <>
      <div className="flex-1 flex flex-col gap-y-8">
        <Heading
          title="My Bounty Tickets"
          description="List all your tickets at one place"
        />

        <CardCompact
          title="Generate Ticket"
          description="A new ticket for bounty will be created"
          className="w-full max-w-[420px] self-center"
          content={<TicketUpsertForm />}
        />

        <Suspense fallback={<Spinner />}>
          <TicketList userId={user?.id} searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default TicketsPage;
