//src/components/header/index.tsx
"use client";
import { homePath, signInPath, signUpPath } from "@/paths";
import { buttonVariants } from "@/components/ui/button";
import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

import { useAuth } from "@/features/auth/hooks/use-auth";
import { AccountDropdown } from "./account-dropdwon";

const Header = () => {
  //const { user } = await getAuth();  since this line of code is under header which is under root layout all the pages under the app route are dynamically rendered since getAuth uses cookies() api which is related with server behaviour

  // fixed the dynamic rendering issue by using useEffect and useState
  // this way the header will be rendered on the client side and the user will be fetched from the server
  const { user, isFetched } = useAuth();

  if (!isFetched) {
    return null;
  }

  const navItems = user ? (
    <AccountDropdown user={user} />
  ) : (
    <>
      <Link
        href={signUpPath()}
        className={buttonVariants({ variant: "outline" })}
      >
        Sign Up
      </Link>

      <Link
        href={signInPath()}
        className={buttonVariants({ variant: "default" })}
      >
        Sign In
      </Link>
    </>
  );
  return (
    <nav className="animate-header-from-top supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div className="flex align-items-center gap-x-2">
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideKanban />
          <h1 className="ml-2 text-lg font-semibold">BountiFy</h1>
        </Link>
      </div>
      <div className="flex align-items-center gap-x-2">
        <ThemeSwitcher />
        {navItems}
      </div>
    </nav>
  );
};

export { Header };
