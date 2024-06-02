import { Outlet } from "react-router-dom";
import Navbar from "../features/Navbar/Navbar";

function AppLayout() {
  return (
    <div className="text-white">
      <Navbar />

      <main className=" max-w-[1350px]  ms-auto me-auto mt-10">
        <Outlet />
      </main>
    </div>
  );
}
{
}

export default AppLayout;
