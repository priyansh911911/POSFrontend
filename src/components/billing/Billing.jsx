import { useState } from 'react';
import Button from '../ui/Button';

const Billing = () => {
  const [cart, setCart] = useState([
    { id: 1, name: 'Butter Chicken', price: 280, qty: 1 },
    { id: 2, name: 'Naan', price: 45, qty: 2 }
  ]);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-text mb-6">Billing</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-text mb-4">Current Order</h3>
          
          <div className="space-y-3 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-background rounded">
                <div>
                  <p className="text-text font-medium">{item.name}</p>
                  <p className="text-text-muted text-sm">₹{item.price} x {item.qty}</p>
                </div>
                <p className="text-text font-semibold">₹{item.price * item.qty}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-text-muted">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-text-muted">
              <span>GST (18%):</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-text border-t border-border pt-2">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-text mb-4">Payment</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-text-muted mb-2">Payment Method</label>
              <select className="w-full p-3 bg-background border border-border rounded text-text">
                <option>Cash</option>
                <option>Card</option>
                <option>UPI</option>
                <option>Online</option>
              </select>
            </div>

            <div>
              <label className="block text-text-muted mb-2">Customer Phone</label>
              <input 
                type="tel" 
                placeholder="Enter phone number"
                className="w-full p-3 bg-background border border-border rounded text-text"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <Button variant="secondary">Save Draft</Button>
              <Button>Process Payment</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;