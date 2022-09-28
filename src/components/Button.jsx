import { Link } from "react-router-dom";

const Button = ({ text, url, link = true, useLink = true }) => {
  if (!link) useLink = false;

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
    console.log(link, useLink, text);
    if (link && useLink) return renderLinkWithLink();
    if (link && !useLink) return renderLinkWithoutLink();
    if (!link) return renderWithoutLink();
  };

  return getRenderFunc();
};

export default Button;
