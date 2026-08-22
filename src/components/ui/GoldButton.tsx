"use client";

import { Button } from "./Button";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function GoldButton({ 
  variant = "primary", 
  size = "md", 
  children,
  className = "",
  ...props 
}: GoldButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-gold)]";
  
  const variants = {
    primary: "gold-gradient-bg text-[var(--color-black)] hover:shadow-[0_0_30px_rgba(184,134,11,0.5)] hover:scale-105 active:scale-95",
    secondary: "bg-[var(--color-sand)] text-[var(--color-gold-dark)] hover:bg-[var(--color-taupe)] hover:text-[var(--color-gold)]",
    outline: "border border-[var(--color-gold)] bg-transparent text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-black)]",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  return (
    <Button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
