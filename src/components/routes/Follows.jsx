import { useLoaderData } from "react-router-dom";
import getFollows from "../../utils/getFollows";
import getTwitchAuth from "../../utils/getTwitchAuth";
import getData from "../../data";
import getPages from "./../../utils/getPages";
import { useState } from "react";

export async function loader({ params }) {
  const username = params.username;
  const { clientId, clientSecret, pageSize } = getData();
  const authObj = await getTwitchAuth(clientId, clientSecret);
  const follows = await getFollows(username, authObj, clientId);

  return [getPages(follows, pageSize), authObj];
}

const Follows = () => {
  const [page, setPage] = useState(1);
  const [follows, authObj] = useLoaderData();

  const getDate = (startTime) => {
    const date = new Date(startTime);
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString();

    return { time, day };
  };

  console.log(follows);
  return (
    <section className="follows">
      {follows[page].map((entry, index) => {
        return (
          <div className="entry" key={index * page}>
            <img
              className="entry-img"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/5ee8b265-22fc-46d3-999e-73b7a943d078-profile_image-70x70.png"
              alt="Avatar"
            />
            <div className="entry-body">
              <h3 className="entry-name">
                <a href={`https://twitch.tv/${entry.to_name}`}>
                  {entry.to_name}
                </a>
              </h3>
              <p className="entry-day">{getDate(entry.followed_at).day}</p>
              <p className="entry-time">{getDate(entry.followed_at).time}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Follows;
