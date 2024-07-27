import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
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
  );
};
