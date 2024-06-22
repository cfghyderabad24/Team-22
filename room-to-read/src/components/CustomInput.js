import React from 'react';

const CustomInput = ({ type, name, placeholder, className, value, onChange, onBlur, disabled = false }) => {
  return (
    <div className="form-floating gap-15">
      <input
        type={type}
        name={name}
        className={`form-control CustomInput ${className}`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={name} className="form-label">{placeholder}</label>
    </div>
  );
};

const styles = `
  .CustomInput {
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s ease-in-out;
  }

  .CustomInput:focus {
    outline: none;
    box-shadow: 0 0 20px rgba(81, 203, 238, 0.7);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default CustomInput;
