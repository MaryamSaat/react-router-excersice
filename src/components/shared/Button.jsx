import React from "react";

const Button = ({ children, onClick, variant = "primary", size = "md", className = "", ...props }) => {
  const baseClasses = "btn font-bold inline-flex justify-center items-center text-center transition-all duration-200";

  const variantClasses = {
    primary: "btn-primary",
    success: "btn-success",
    error: "btn-error",
    warning: "btn-warning",
  };

  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} !flex !justify-center !items-center ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
