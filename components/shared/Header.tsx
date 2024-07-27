import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { NavItems } from "./NavItems";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            priority
            src="/assets/images/logo.svg"
            style={{ width: "auto", height: "auto" }}
            width={128}
            alt="evently logo"
            height={38}
          />
        </Link>
        <SignedIn>
          <nav className="md:flex hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};
