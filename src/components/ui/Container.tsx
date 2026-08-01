import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: "default" | "wide" | "full";
  className?: string;
}

export const Container = ({
  children,
  size = "default",
  className = "",
}: ContainerProps) => {
  const sizeClasses = {
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "w-full",
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
};
