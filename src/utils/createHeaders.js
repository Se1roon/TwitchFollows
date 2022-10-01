export default function createHeaders(token_type, access_token, clientId) {
  const authorization = `${token_type} ${access_token}`;
  const headers = {
    Authorization: authorization,
    "Client-Id": clientId,
  };

  return headers;
}
