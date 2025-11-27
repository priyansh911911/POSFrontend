const ErrorBlock = ({ error, onRetry }) => {
  return (
    <div className="bg-red-900/20 border border-red-600 rounded-lg p-4 text-center">
      <div className="text-4xl mb-2">⚠️</div>
      <h3 className="text-lg font-semibold text-red-400 mb-2">Something went wrong</h3>
      <p className="text-red-300 text-sm mb-4">{error}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorBlock;