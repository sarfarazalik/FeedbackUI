import PropTypes from "prop-types";

function Button({ children, isDisabled, type, version }) {
  return (
    <button
      className={`btn btn-${version}`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  version: "primary",
  type: "submit",
  isDisabled: true,
};
export default Button;
