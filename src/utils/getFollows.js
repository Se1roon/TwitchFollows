import getUserWithLogin from "./getUserWithLogin";
import getUserFollows from "./getUserFollows";

export default async function getFollows(username, authorizationObj) {
  const user = await getUserWithLogin(username, authorizationObj);

  let currentPaginate = "";

  let userFollows = [];

  while (true) {
    const follows = currentPaginate
      ? await getUserFollows(user.data[0].id, authorizationObj, currentPaginate)
      : await getUserFollows(user.data[0].id, authorizationObj);

    userFollows.push(...follows.data);
    currentPaginate = follows.pagination.cursor;

    if (!currentPaginate) return userFollows;
  }
}
