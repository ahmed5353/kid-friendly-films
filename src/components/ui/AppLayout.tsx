import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex-grow flex flex-col gap-16 justify-between">
        <main className="max-w-[1350px] mx-auto mt-10 w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
