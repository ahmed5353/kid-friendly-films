import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="text-white ">
      <Navbar />

      <div className=" flex flex-col gap-16 justify-between h-screen">
        <main className=" max-w-[1350px]   ms-auto me-auto mt-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
