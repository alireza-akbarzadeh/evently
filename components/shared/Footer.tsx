import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex items-center justify-between">
        <Logo />
        <p className="text-md font-semibold">
          2024 Evently. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
