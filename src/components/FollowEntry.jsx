const FollowEntry = ({ entry, user }) => {
  const getDate = (startTime) => {
    const date = new Date(startTime);
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString();

    return { time, day };
  };

  if (!entry) return null;

  if (user) {
    return (
      <div className="entry">
        <img
          className="entry-img"
          src={user.data[0].profile_image_url}
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
  }

  return null;
};

export default FollowEntry;
