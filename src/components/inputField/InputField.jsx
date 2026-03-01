import React from "react";
import styles from "./InputField.module.css";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
}) => {
  const showError = touched && error;
  const showSuccess = touched && !error;

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${styles.input} 
          ${showError ? styles.error : ""} 
          ${showSuccess ? styles.success : ""}`}
      />

      {showError && <span className={styles.errorText}>{error}</span>}
      {showSuccess && (
        <span className={styles.successText}>Looks good!</span>
      )}
    </div>
  );
};

export default InputField;