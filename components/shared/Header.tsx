import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { NavItems } from "./NavItems";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Logo />
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
