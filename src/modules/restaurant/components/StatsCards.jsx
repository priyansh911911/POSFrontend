import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      title: "Today's Sales",
      value: "₹12,450",
      change: "+12%",
      positive: true
    },
    {
      title: "Orders",
      value: "45",
      change: "+8%",
      positive: true
    },
    {
      title: "Customers",
      value: "32",
      change: "+15%",
      positive: true
    },
    {
      title: "Revenue",
      value: "₹1,24,500",
      change: "+22%",
      positive: true
    }
  ];

  return (
    <div className="stats-cards">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h3>{stat.title}</h3>
          <div className="stat-value">{stat.value}</div>
          <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;