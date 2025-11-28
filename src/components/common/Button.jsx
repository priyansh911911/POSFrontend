const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
  const variants = {
    primary: 'bg-primary hover:bg-hover text-white',
    secondary: 'bg-surface hover:bg-background text-text border border-border'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;