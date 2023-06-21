import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, login } = useAuthContext();
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand ">
        <h1>BOOK REVIEW</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        {user ? (
          <Button text={"Logout"} onClick={() => {}} />
        ) : (
          <Button text={"Login"} onClick={login} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
