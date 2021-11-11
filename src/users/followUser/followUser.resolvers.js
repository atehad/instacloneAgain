const client = require("../../client");
const { protectedResolver } = require("../users.utils");

module.exports = {
  Mutation: {
    followUser: protectedResolver(async (_, { userName }, { loggedInUser }) => {
      const ok = await client.user.findUnique({ where: { userName } });
      if (!ok) {
        return {
          ok: false,
          error: "That user does not exist."
        };
      }

      await client.user.update({
        where: { id: loggedInUser.id },
        data: {
          following: {
            connect: { userName }
          }
        }
      });
      return {
        ok: true
      };
    })
  }
};
