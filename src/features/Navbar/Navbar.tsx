import SearchBar from "./SearchBar";

const Navbar: React.FC = () => {
  return (
    <nav className="flex  p-2 ps-4 pe-4 mt-3 max-w-[95%] me-auto ms-auto items-center rounded-md justify-between -bg--color-primary">
      {/* ICON */}
      <div className="flex gap-4 items-center ">
        <p>icon</p>
        <span>Movies</span>
      </div>
      <SearchBar />
      <p>Found X results</p>
    </nav>
  );
};

export default Navbar;
