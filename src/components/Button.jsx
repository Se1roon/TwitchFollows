import { Link } from "react-router-dom";

const Button = ({
  text,
  url,
  type,
  button = false,
  link = true,
  useLink = true,
  onClick,
}) => {
  if (!link) useLink = false;

  const renderButton = () => {
    return (
      <button className="btn" type={type} onClick={onClick}>
        {text}
      </button>
    );
  };

  const renderLinkWithLink = () => {
    return (
      <Link className="btn" to={url}>
        {text}
      </Link>
    );
  };

  const renderLinkWithoutLink = () => {
    return (
      <a className="btn" href={url}>
        {text}
      </a>
    );
  };

  const renderWithoutLink = () => {
    return <span className="btn">{text}</span>;
  };

  const getRenderFunc = () => {
    if (button) return renderButton();
    if (link && useLink) return renderLinkWithLink();
    if (link && !useLink) return renderLinkWithoutLink();
    if (!link) return renderWithoutLink();
  };

  return getRenderFunc();
};

export default Button;
