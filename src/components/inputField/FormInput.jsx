import React from "react";
import InputField from "../inputField/InputField.jsx";
import { useInputValidation } from "../../hooks/useInputValidation.js";
import { validateEmail, validatePassword } from "../../utils/validators.js";

const LoginForm = () => {
  const email = useInputValidation("", validateEmail);
  const password = useInputValidation("", validatePassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.isValid && password.isValid) {
      console.log("Form submitted", {
        email: email.value,
        password: password.value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Email" type="email" {...email} />
      <InputField label="Password" type="password" {...password} />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;