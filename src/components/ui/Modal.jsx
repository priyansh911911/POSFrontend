const Modal = ({ isOpen, onClose, title, children, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`bg-surface border border-border rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-text">{title}</h3>
          <button
            onClick={onClose}
            className="text-text-muted hover:text-text text-2xl"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;