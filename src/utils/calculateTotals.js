export const calculateSubtotal = (items) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

export const calculateTax = (subtotal, taxRate = 0.18) => {
  return subtotal * taxRate;
};

export const calculateDiscount = (subtotal, discountPercent) => {
  return subtotal * (discountPercent / 100);
};

export const calculateTotal = (items, discountPercent = 0, taxRate = 0.18) => {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, discountPercent);
  const tax = calculateTax(subtotal - discount, taxRate);
  return subtotal - discount + tax;
};