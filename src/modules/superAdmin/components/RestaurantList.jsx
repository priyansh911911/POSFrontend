import React from 'react';

const RestaurantList = () => {
  const restaurants = [
    { id: 1, name: "Pizza Palace", status: "Active", onboardedBy: "Sales001" },
    { id: 2, name: "Burger Hub", status: "Pending", onboardedBy: "Sales002" },
    { id: 3, name: "Cafe Delight", status: "Inactive", onboardedBy: "Sales001" }
  ];

  return (
    <div className="restaurant-list">
      <h3>Restaurant Management</h3>
      <div className="list-container">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-item">
            <span>{restaurant.name}</span>
            <span className={`status ${restaurant.status.toLowerCase()}`}>
              {restaurant.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;