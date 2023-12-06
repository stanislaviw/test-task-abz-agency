export const CommonButton = ({ onClick, text, type }) => {
  return (
    <button
      className="button text_paragraph"
      type={type || "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
