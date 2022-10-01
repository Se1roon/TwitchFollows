export default function getPages(follows, pageSize) {
  let result = {};

  let p1 = 0;
  let p2 = pageSize - 1;

  let iterationNumber = 1;
  while (p1 < follows.length - 1) {
    const piece = [];
    for (let i = p1; i <= p2; i++) piece.push(follows[i]);

    result = { ...result, [iterationNumber]: piece };

    iterationNumber++;
    p1 = p2 + 1;
    p2 = p2 + 12;

    if (p2 > follows.length - 1) p2 = follows.length - 1;
  }

  return result;
}
