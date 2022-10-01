import getUserWithLogin from "./getUserWithLogin";
import getUserFollows from "./getUserFollows";

export default async function getFollows(username, authorizationObj, clientId) {
  const user = await getUserWithLogin(username, authorizationObj, clientId);

  let currentPaginate = "";

  let userFollows = [];

  while (true) {
    const follows = currentPaginate
      ? await getUserFollows(
          clientId,
          user.data[0].id,
          authorizationObj,
          currentPaginate
        )
      : await getUserFollows(clientId, user.data[0].id, authorizationObj);

    userFollows.push(...follows.data);
    currentPaginate = follows.pagination.cursor;

    if (!currentPaginate) return userFollows;
  }
}
