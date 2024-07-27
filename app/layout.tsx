import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "A Modern Yet Powerfull App For Event Management",
  icons: "/assets/images/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
