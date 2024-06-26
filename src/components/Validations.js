export const Validations = (email, password) => {
  const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!isEmail) return "Not a valid Email";
  if (!isPassword) return "Not a valid Password";

  return null;
};
