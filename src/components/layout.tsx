import { Outlet } from "react-router";
import { Header } from "./header";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Header />
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>
    </div>
  );
};
