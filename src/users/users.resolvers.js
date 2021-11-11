const client = require("../client");

module.exports = {
  User: {
    totalFollower: ({ id }) =>
      client.user.count({ where: { following: { some: { id } } } }),
    totalFollowing: ({ id }) =>
      client.user.count({ where: { follower: { some: { id } } } }),
    isMe: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    isFollowing: async ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      const exist = await client.user.count({
        where: { userName: loggedInUser.userName, following: { some: { id } } }
      });
      return Boolean(exist);

      //다른 방식
    }
  }
};
