export const validators = {
  email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  phone: (phone) => /^[0-9]{10}$/.test(phone),
  required: (value) => value && value.trim().length > 0,
  minLength: (value, min) => value && value.length >= min
};