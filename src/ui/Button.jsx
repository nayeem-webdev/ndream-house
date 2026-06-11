// Button.jsx
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
  className = "",
  fullWidth = false,
  loading = false,
  to,
  href,
  target = "_self",
  rel,
  isLink = false,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

  // Using your brand colors
  const variants = {
    primary:
      "bg-[#3b82f6] text-white hover:bg-[#0a4d8f] focus:ring-[#0859aa]/50 active:bg-[#094180] shadow-sm hover:shadow-md",
    secondary:
      "bg-[#047857] text-white hover:bg-[#059669] focus:ring-[#5db946]/50 active:bg-[#45932f] shadow-sm hover:shadow-md",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 active:bg-red-800 shadow-sm hover:shadow-md",
    success:
      "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 active:bg-green-800 shadow-sm hover:shadow-md",
    warning:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 active:bg-yellow-700 shadow-sm hover:shadow-md",
    outline:
      "border-2 border-[#0859aa] text-[#0859aa] hover:bg-[#0859aa]/10 focus:ring-[#0859aa] active:bg-[#0859aa]/20",
    ghost:
      "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 active:bg-gray-200",
    "outline-secondary":
      "border-2 border-[#5db946] text-[#5db946] hover:bg-[#5db946]/10 focus:ring-[#5db946] active:bg-[#5db946]/20",
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-7 py-3.5 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.medium;

  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`;

  // Loading spinner component with your primary color
  const LoadingSpinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );

  // Icon component
  const IconWrapper = () =>
    icon &&
    React.cloneElement(icon, {
      className: `w-4 h-4 ${iconPosition === "left" ? "mr-2" : "ml-2"}`,
    });

  // Content with icon
  const renderContent = () => (
    <>
      {loading && <LoadingSpinner />}
      {!loading && iconPosition === "left" && <IconWrapper />}
      {children}
      {!loading && iconPosition === "right" && <IconWrapper />}
    </>
  );

  // If it's an internal link (React Router)
  if (to) {
    return (
      <Link
        to={to}
        className={allClasses}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        aria-disabled={disabled}
        {...props}
      >
        {renderContent()}
      </Link>
    );
  }

  // If it's an external link
  if (href || isLink) {
    return (
      <a
        href={disabled ? undefined : href}
        className={allClasses}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        aria-disabled={disabled}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  // Regular button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={allClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
    "outline",
    "ghost",
    "outline-secondary",
  ]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  isLink: PropTypes.bool,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;
