import { useLoaderData } from "react-router-dom";
import getFollows from "../../utils/getFollows";
import getTwitchAuth from "../../utils/getTwitchAuth";
import getData from "../../data";
import getPages from "./../../utils/getPages";

export async function loader({ params }) {
  const username = params.username;
  const { clientId, clientSecret, pageSize } = getData();

  const authObj = await getTwitchAuth(clientId, clientSecret);
  const follows = await getFollows(username, authObj, clientId);

  return getPages(follows, pageSize);
}

const Follows = () => {
  const follows = useLoaderData();

  console.log(follows);

  return (
    <div>
      <h1>Siema</h1>
    </div>
  );
};

export default Follows;
