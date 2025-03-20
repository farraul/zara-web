"use client";

import { PropsWithChildren } from "react";
import Header from "../commons/Header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className="px-10 xl:px-20 min-h-screen flex flex-col ">
      <Header />
      {children}
    </section>
  );
};

export default MainLayout;
