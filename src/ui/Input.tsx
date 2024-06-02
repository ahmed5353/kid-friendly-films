import { Input } from "@material-tailwind/react";

function InputSearch() {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="!border shadow-md !-border-gray-300 !bg-gray-200 text-gray-800  ring-4 ring-transparent placeholder:text-gray-500 focus:shadow-lg focus:shadow-gray-900/1 focus:w-72 placeholder:opacity-100"
      labelProps={{
        className: "hidden",
      }}
      containerProps={{ className: "min-w-[100px]" }}
      crossOrigin=""
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    />
  );
}
export default InputSearch;
