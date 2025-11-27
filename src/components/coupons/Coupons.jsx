import Button from '../ui/Button';

const Coupons = () => {
  const coupons = [
    { id: 1, code: 'WELCOME20', discount: '20%', type: 'Percentage', status: 'Active', used: 45, limit: 100 },
    { id: 2, code: 'FLAT50', discount: '₹50', type: 'Fixed', status: 'Active', used: 23, limit: 50 },
    { id: 3, code: 'NEWUSER', discount: '15%', type: 'Percentage', status: 'Expired', used: 100, limit: 100 }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text">Coupons & Discounts</h2>
        <Button>Create Coupon</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map(coupon => (
          <div key={coupon.id} className="bg-surface p-6 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-text">{coupon.code}</h3>
                <p className="text-text-muted">{coupon.type} Discount</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                coupon.status === 'Active' 
                  ? 'bg-green-500/20 text-green-500' 
                  : 'bg-red-500/20 text-red-500'
              }`}>
                {coupon.status}
              </span>
            </div>

            <div className="text-center mb-4">
              <div className="text-3xl font-bold text-primary mb-2">{coupon.discount}</div>
              <div className="text-text-muted text-sm">
                Used: {coupon.used}/{coupon.limit}
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="secondary" className="flex-1">Edit</Button>
              <Button variant="danger" className="flex-1">Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;