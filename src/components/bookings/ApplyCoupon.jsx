import { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const ApplyCoupon = ({ onApply, discount = 0 }) => {
  const [couponCode, setCouponCode] = useState('');

  const handleApply = () => {
    if (couponCode.trim()) {
      onApply(couponCode);
      setCouponCode('');
    }
  };

  return (
    <div className="bg-surface border border-border rounded-lg p-4">
      <h3 className="text-text font-semibold mb-3">Apply Coupon</h3>
      <div className="flex gap-2">
        <Input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
          className="flex-1"
        />
        <Button onClick={handleApply} variant="primary">
          Apply
        </Button>
      </div>
      {discount > 0 && (
        <p className="text-green-400 text-sm mt-2">Discount applied: ₹{discount}</p>
      )}
    </div>
  );
};

export default ApplyCoupon;