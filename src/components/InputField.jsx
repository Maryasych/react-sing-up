export const InputField = (props) => {
  let {
    elem,
    isText = true,
    fieldName,
    setFieldState,
    fieldOutlineState,
    inputFieldState,
    placeholder,
    name,
    setValue,
    optionalClasses = "",
  } = props;
  return (
    <input
      ref={elem}
      type={`${isText ? "text" : "password"}`}
      className={` custom-form-control rounded-16 p-3 ${inputFieldState[fieldOutlineState]} ${optionalClasses}`}
      placeholder={placeholder}
      name={name}
      required
      aria-describedby={fieldName}
      onFocus={() => setFieldState(1)}
      onBlur={() => setFieldState(0)}
      onChange={(e) => setValue(fieldName, e.target.value)}
    />
  );
};
