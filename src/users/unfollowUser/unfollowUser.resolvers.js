const client = require("../../client");
const { protectedResolver } = require("../users.utils");

module.exports = {
  Mutation: {
    unfollowUser: protectedResolver(
      async (_, { userName }, { loggedInUser }) => {
        const ok = await client.user.findUnique({ where: { userName } });
        if (!ok) {
          return {
            ok: false,
            error: "Can't unfollow user."
          };
        }
        await client.user.update({
          where: { id: loggedInUser.id },
          data: { following: { disconnect: { userName } } }
        });
        return {
          ok: true
        };
      }
    )
  }
};
