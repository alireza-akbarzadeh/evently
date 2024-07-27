import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            priority
            src="/assets/images/logo.svg"
            width={128}
            alt="evently logo"
            height={38}
          />
        </Link>
        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};
