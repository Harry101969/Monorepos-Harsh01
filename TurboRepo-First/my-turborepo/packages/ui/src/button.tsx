"use client";

interface ButtonProps {
  className?: string;
}

export const Button = ({ className }: ButtonProps) => {
  return (
    <button className={className} onClick={() => alert(`Hello from Harsh!`)}>
      Hello From Harsh
    </button>
  );
};
