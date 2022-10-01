import createHeaders from "./createHeaders";

export default async function getUserFollows(
  clientId,
  userId,
  authorizationObj,
  pagination = ""
) {
  const endpoint = `https://api.twitch.tv/helix/users/follows?from_id=${userId}&after=${pagination}`;

  let { access_token, token_type } = authorizationObj;

  token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);

  const headers = createHeaders(token_type, access_token, clientId);

  return fetch(endpoint, { headers })
    .then((res) => res.json())
    .then((data) => data);
}
