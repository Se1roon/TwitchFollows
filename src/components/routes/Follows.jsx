import { useLoaderData } from "react-router-dom";
import getFollows from "../../utils/getFollows";
import getTwitchAuth from "../../utils/getTwitchAuth";
import getData from "../../data";
import getPages from "./../../utils/getPages";
import { useState } from "react";
import FollowEntry from "../FollowEntry";

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
