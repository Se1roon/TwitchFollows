const FollowButtons = ({ onClick }) => {
  return (
    <div className="follow-buttons">
      <div className="btn1" onClick={(event) => onClick(event)}>
        <div className="one"></div>
      </div>
      <div className="btn2" onClick={(event) => onClick(event)}>
        <div className="two"></div>
      </div>
    </div>
  );
};

export default FollowButtons;
