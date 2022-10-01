export default async function getTwitchAuthorization(clientId, clientSecret) {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

  return fetch(url, { method: "POST" })
    .then((res) => res.json())
    .then((data) => data);
}
