const Header = ({ row = false, item1Content, item2Content }) => {
  const renderFirstItem = () => {
    return <div className="header-item1">{item1Content}</div>;
  };

  const renderSecondItem = () => {
    return <div className="header-item2">{item2Content}</div>;
  };

  return (
    <header className={row ? "header row" : "header column"}>
      {item1Content ? renderFirstItem() : null}
      {item2Content ? renderSecondItem() : null}
    </header>
  );
};

export default Header;
