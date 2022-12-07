import React from 'react';
import PropTypes from 'prop-types';
import '../Signin/signin.css';

const InputField = ({
  value, placeholder, type, label, onChange,
}) => {
  const handleChange = (event) => {
    // eslint-disable-next-line no-shadow
    const { value } = event.target;
    onChange(value);
  };
  return (
    <>
      <label htmlFor="email">{label}</label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        label={label}
      />
    </>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
InputField.defaultProps = {
  value: '',
  placeholder: '',
  type: 'text',
  label: '',
};

export default InputField;
