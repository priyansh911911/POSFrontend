import React from 'react';

const SalesInfoForm = () => {
  return (
    <div className="sales-info-form">
      <h3>Sales Information</h3>
      <div className="info-section">
        <h4>Personal Info</h4>
        <p>Name, Valid ID, Address, Number</p>
      </div>
      <div className="reg-form">
        <h4>Registration Form</h4>
        <form>
          <input type="text" placeholder="Restaurant Name" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Valid ID" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SalesInfoForm;