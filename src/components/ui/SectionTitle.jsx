const SectionTitle = ({
  children,
  id,
  className = "",
}) => {
  return (
    <h2
      id={id}
      className={`section-title ${className}`.trim()}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;