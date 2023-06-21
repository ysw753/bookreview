import React from "react";

type ButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-brand py-2 px-4 rounded-sm hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
