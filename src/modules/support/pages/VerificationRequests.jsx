import React from 'react';

const VerificationRequests = () => {
  const requests = [
    { id: 1, restaurant: "Pizza Palace", type: "Document Verification", status: "Pending" },
    { id: 2, restaurant: "Burger Hub", type: "ID Verification", status: "Approved" },
    { id: 3, restaurant: "Cafe Delight", type: "Address Verification", status: "Rejected" }
  ];

  return (
    <div className="verification-requests">
      <h3>Verification Requests</h3>
      <div className="requests-list">
        {requests.map(request => (
          <div key={request.id} className="request-item">
            <span>{request.restaurant}</span>
            <span>{request.type}</span>
            <span className={`status ${request.status.toLowerCase()}`}>
              {request.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerificationRequests;