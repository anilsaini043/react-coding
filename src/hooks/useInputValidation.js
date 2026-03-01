import { useState } from "react";

export const useInputValidation = (initialValue = "", validator) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    if (validator) {
      const validationError = validator(val);
      setError(validationError);
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (validator) {
      const validationError = validator(value);
      setError(validationError);
    }
  };

  const isValid = !error && touched;

  return {
    value,
    error,
    touched,
    isValid,
    onChange: handleChange,
    onBlur: handleBlur,
    setValue,
  };
};