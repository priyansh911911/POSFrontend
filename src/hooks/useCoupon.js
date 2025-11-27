import { useState } from 'react';

const useCoupon = () => {
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);

  const applyCoupon = async (code) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ code })
      });
      
      const coupon = await response.json();
      if (coupon.valid) {
        setAppliedCoupon(coupon);
        setDiscount(coupon.discount);
        return { success: true, discount: coupon.discount };
      }
      return { success: false, message: 'Invalid coupon' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  return { appliedCoupon, discount, applyCoupon, removeCoupon };
};

export default useCoupon;