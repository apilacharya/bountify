import Link from "next/link";
import { ticketsPath } from "@/paths";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Suspense } from "react";
import { searchParamsCache } from "@/features/ticket/search-params";
import { SearchParams } from "nuqs/server";

type HomePageProps = {
  searchParams: Promise<SearchParams>;
};

const HomePage = ({ searchParams }: HomePageProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="All Bounty Tickets"
        description="Bounty tickets by everyone at one place"
      />

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Go to all your listed Bounty Tickets
        </Link>
      </div>

      <Suspense fallback={<Spinner />}>
        <TicketList searchParams={searchParamsCache.parse(searchParams)} />
      </Suspense>
    </div>
  );
};

export default HomePage;
