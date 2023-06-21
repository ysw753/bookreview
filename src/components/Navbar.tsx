import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, login, logout } = useAuthContext();
  const navigate = useNavigate();
  const bookReport = () => {
    if (user) {
      navigate("/write");
    }
  };
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand ">
        <h1>BOOK REVIEW</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        {user && <p>{user.displayName}님 환영합니다!</p>}
        {user && (
          <Button text={"독후감 작성하기"} onClick={bookReport}></Button>
        )}
        {user ? (
          <Button text={"Logout"} onClick={logout} />
        ) : (
          <Button text={"Login"} onClick={login} />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
