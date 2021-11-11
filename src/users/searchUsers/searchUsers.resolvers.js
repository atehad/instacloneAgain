const client = require("../../client");

module.exports = {
  Query: {
    searchUsers: (_, { keyword, lastId }) =>
      client.user.findMany({
        where: {
          userName: {
            startsWith: keyword.toLowerCase()
          }
        },
        take: 5,
        skip: lastId ? 1 : 0,
        cursor: lastId ? { id: lastId } : undefined
      })
  }
};
