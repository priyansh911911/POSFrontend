export const formatters = {
  currency: (amount) => `₹${amount.toLocaleString('en-IN')}`,
  date: (date) => new Date(date).toLocaleDateString('en-IN'),
  time: (date) => new Date(date).toLocaleTimeString('en-IN'),
  phone: (phone) => phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
};