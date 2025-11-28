import React from 'react';

const CreateRestaurant = () => {
  return (
    <div className="create-restaurant">
      <h3>Create Restaurant Panel</h3>
      <form className="restaurant-form">
        <input type="text" placeholder="Restaurant Name" />
        <input type="text" placeholder="Address" />
        <select>
          <option>Select Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Pending</option>
        </select>
        <button type="submit">Create Restaurant</button>
      </form>
    </div>
  );
};

export default CreateRestaurant;