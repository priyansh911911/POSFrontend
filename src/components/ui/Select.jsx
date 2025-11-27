const Select = ({ options = [], className = '', ...props }) => {
  return (
    <select
      className={`w-full p-3 bg-background border border-border rounded text-text focus:border-primary outline-none transition-colors ${className}`}
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;