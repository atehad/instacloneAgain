const bcrpyt = require("bcrypt");
const client = require("../../client");

module.exports = {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, userName, email, password }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: { OR: [{ userName }, { email }] }
        });
        if (existingUser) {
          throw new Error("This username/email is already taken.");
        }
        const uglyPassword = await bcrpyt.hash(password, 10);
        await client.user.create({
          data: {
            firstName,
            lastName,
            userName,
            email,
            password: uglyPassword
          }
        });
        return {
          ok: true
        };
      } catch (e) {
        return {
          ok: false,
          error: "Cannot create account."
        };
      }
    }
  }
};
