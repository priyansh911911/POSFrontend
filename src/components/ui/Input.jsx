const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full p-3 bg-background border border-border rounded text-text placeholder-text-muted focus:border-primary outline-none transition-colors ${className}`}
      {...props}
    />
  );
};

export default Input;