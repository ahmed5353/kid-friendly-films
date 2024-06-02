import React from "react";
import Logo from "./Logo";
import useMovies from "../../features/Movies/useMovies";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  // console.log(location.pathname);

  const { movies } = useMovies();
  const moviesLength: number = movies?.length;
  return (
    <nav className="flex flex-col md:flex-row p-2 md:p-4 mt-3 max-w-[95%] mx-auto items-center rounded-md justify-between -bg--color-primary">
      {/* ICON */}
      <Logo />
      {/* <SearchBar /> */}
      {location.pathname === "/home" && (
        <p className="text-center md:text-left">
          Found <strong>{moviesLength}</strong> results
        </p>
      )}
    </nav>
  );
};

export default Navbar;
