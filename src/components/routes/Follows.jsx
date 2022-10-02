import { useLoaderData } from "react-router-dom";
import getFollows from "../../utils/getFollows";
import getTwitchAuth from "../../utils/getTwitchAuth";
import getData from "../../data";
import getPages from "./../../utils/getPages";
import { useState } from "react";
import FollowEntry from "../FollowEntry";
import FollowButtons from "../FollowButtons";

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

  const handleButtonClick = (e) => {
    const className = e.target.className;

    if (className === "two" && page + 1 <= Object.keys(follows).length) {
      setPage(page + 1);
      return;
    }

    if (className === "one" && page > 1) setPage(page - 1);
  };

  return (
    <section className="follows">
      <div className="follows-body">
        {follows[page].map((entry, index) => {
          return <FollowEntry entry={entry} key={index * page} />;
        })}
      </div>
      <FollowButtons onClick={handleButtonClick} />
    </section>
  );
};

export default Follows;
