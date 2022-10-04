import { useLoaderData, useNavigation } from "react-router-dom";
import getTwitchAuth from "../../utils/getTwitchAuth";
import getData from "../../data";
import getPages from "./../../utils/getPages";
import { useState } from "react";
import FollowEntry from "../FollowEntry";
import FollowButtons from "../FollowButtons";
import getUsers from "../../utils/getUsers";

export async function loader({ params }) {
  const { clientId, clientSecret, pageSize } = getData();
  const authObj = await getTwitchAuth(clientId, clientSecret);

  const follows = await getUsers(params.username, authObj, clientId);

  return [getPages(follows, pageSize), authObj, clientId];
}

const Follows = () => {
  const [page, setPage] = useState(1);
  const [follows, authObj, clientId] = useLoaderData();
  const navigation = useNavigation();

  if (!follows) {
    return (
      <section className="follows error">
        <div className="follows-body">
          <p>The user with this username does not exist.</p>
        </div>
      </section>
    );
  }

  const handleButtonClick = (e) => {
    const className = e.target.className;

    if (className === "two" && page + 1 <= Object.keys(follows).length) {
      setPage(page + 1);
      return;
    }

    if (className === "one" && page > 1) setPage(page - 1);
  };

  return (
    <section
      className={navigation.state === "loading" ? "follows loading" : "follows"}
    >
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
