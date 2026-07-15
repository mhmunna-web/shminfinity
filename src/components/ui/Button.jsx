const Button = ({
  children,
  href,
  variant = "primary",
  target,
  rel,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={
        variant === "primary"
          ? "primary-btn"
          : "secondary-btn"
      }
    >
      {children}
    </a>
  );
};

export default Button;