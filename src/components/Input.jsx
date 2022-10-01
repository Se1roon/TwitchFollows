const Input = ({ type, name, onChange }) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
