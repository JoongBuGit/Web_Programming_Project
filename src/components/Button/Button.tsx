import React from 'react';
import "@/components/Button/Button.css";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
