import getData from "../data";
import getTwitchAuthorization from "./getTwitchAuth";
import createHeaders from "./createHeaders";
import getUserWithId from "./getUserWithId";
import getFollows from "./getFollows";

async function getUser(userLogin, authorizationObj, clientId) {
  const endpoint = `https://api.twitch.tv/helix/users?login=${userLogin}`;

  let { access_token, token_type } = authorizationObj;

  token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

  const headers = createHeaders(token_type, access_token, clientId);

  return fetch(endpoint, { headers })
    .then((res) => res.json())
    .then((data) => data);
}

export default async function getUsers(username, authObj, clientId) {
  const follows = await getFollows(username, authObj, clientId);

  const followUsers = [];
  for (let entry of follows) {
    const obj = {
      followed_at: entry.followed_at,
      id: entry.to_id,
      name: entry.to_name,
    };

    const entryUser = await getUserWithId(obj.id, authObj, clientId);
    if (entryUser.data.length !== 0) {
      obj["avatarUrl"] = entryUser.data[0].profile_image_url;

      followUsers.push(obj);
    }
  }

  return followUsers;
}
