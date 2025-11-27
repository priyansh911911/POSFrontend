const EmptyState = ({ title, description, icon = '📭' }) => {
  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
      <p className="text-text-muted">{description}</p>
    </div>
  );
};

export default EmptyState;