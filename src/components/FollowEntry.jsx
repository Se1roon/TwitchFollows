const FollowEntry = ({ entry }) => {
  const getDate = (startTime) => {
    const date = new Date(startTime);
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString();

    return { time, day };
  };

  if (!entry) return null;

  return (
    <div className="entry">
      <img className="entry-img" src={entry.avatarUrl} alt="Avatar" />
      <div className="entry-body">
        <h3 className="entry-name">
          <a href={`https://twitch.tv/${entry.name}`}>{entry.name}</a>
        </h3>
        <p className="entry-day">{getDate(entry.followed_at).day}</p>
        <p className="entry-time">{getDate(entry.followed_at).time}</p>
      </div>
    </div>
  );

  return null;
};

export default FollowEntry;
