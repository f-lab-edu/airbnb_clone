import { ReactNode } from "react";
import { Header } from "./header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
    </div>
  );
};
