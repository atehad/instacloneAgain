const client = require("../../client");

module.exports = {
  Query: {
    seeProfile: (_, { userName }) =>
      client.user.findUnique({
        where: { userName },
        include: { following: true, follower: true }
      })
  }
};
