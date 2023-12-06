export const CommonButton = ({ onClick, text, type, disabled }) => {
  return (
    <button
      className="button text_paragraph"
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
