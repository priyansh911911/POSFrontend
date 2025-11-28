const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-text text-sm font-medium mb-2">{label}</label>}
      <input 
        className={`w-full px-3 py-2 bg-surface border border-border rounded text-text focus:outline-none focus:border-primary ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;