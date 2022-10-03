import getUserWithId from "./getUserWithId";

export default async function getUsersOnPage(follows, page, authObj, clientId) {
  const users = follows[page];

  const output = [];
  for (let user of users) {
    const id = user.to_id;
    const userObj = await getUserWithId(id, authObj, clientId);
    output.push(userObj);
  }

  return output;
}
