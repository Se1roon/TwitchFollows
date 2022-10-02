const FollowEntry = ({ entry }) => {
  const getDate = (startTime) => {
    const date = new Date(startTime);
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString();

    return { time, day };
  };

  return (
    <div className="entry">
      <img
        className="entry-img"
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/5ee8b265-22fc-46d3-999e-73b7a943d078-profile_image-70x70.png"
        alt="Avatar"
      />
      <div className="entry-body">
        <h3 className="entry-name">
          <a href={`https://twitch.tv/${entry.to_name}`}>{entry.to_name}</a>
        </h3>
        <p className="entry-day">{getDate(entry.followed_at).day}</p>
        <p className="entry-time">{getDate(entry.followed_at).time}</p>
      </div>
    </div>
  );
};

export default FollowEntry;
