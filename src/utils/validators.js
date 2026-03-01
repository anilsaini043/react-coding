export const validateEmail = (value) => {
  if (!value) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) ? "" : "Invalid email format";
};

export const validatePassword = (value) => {
  if (!value) return "Password is required";
  if (value.length < 6) return "Minimum 6 characters required";
  return "";
};