import React from "react";

interface ButtonSubmitProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ButtonSubmit = ({
  children,
  onClick,
  disabled = false,
  className = "",
}: ButtonSubmitProps) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;
