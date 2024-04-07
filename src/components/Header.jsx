import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="sticky top-0 bg-slate-600">
      <div className="flex items-center justify-between  ">
        {/* <h1 className="bg-red-400">Header</h1> */}
        <Link className="m-5 font-bold text-3xl text-white cursor-pointer" to="/">Student Management</Link>
      </div>
    </div>
  );
};

export default Header;
