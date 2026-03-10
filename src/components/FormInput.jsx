const FormInput = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error = '',
}) => {
  return (
    <div className="form-group">
      <label htmlFor={label} className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={label}
          className={`form-input ${error ? 'input-error' : ''}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows="4"
        />
      ) : (
        <input
          id={label}
          type={type}
          className={`form-input ${error ? 'input-error' : ''}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default FormInput
