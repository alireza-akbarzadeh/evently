import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import React, { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
