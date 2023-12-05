export const Button = ({ onClick, text, type }) => {
  return (
    <button type={type || "button"} onClick={onClick}>
      {text}
    </button>
  );
};
