const ErrorMessage = (props) => {
  return (
    <div className="error-message">
      <span className="text-danger">{props.message}</span>
    </div>
  );
};
export { ErrorMessage };
