import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { NavItems } from "./NavItems";

export const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            priority
            src="/assets/icons/menu.svg"
            style={{ width: "auto", height: "auto" }}
            width={24}
            alt="menu"
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <div className="w-28">
            <Image
              priority
              src="/assets/images/logo.svg"
              style={{ width: "auto", height: "auto" }}
              width={128}
              alt="menu"
              height={38}
              className="cursor-pointer"
            />
          </div>
          <Separator className="border border-gray-50" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
