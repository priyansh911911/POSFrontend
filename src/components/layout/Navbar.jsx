const Navbar = ({ title, actions }) => {
  return (
    <nav className="bg-surface border-b border-border px-4 py-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-text">{title}</h1>
        <div className="flex items-center space-x-4">
          {actions}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;