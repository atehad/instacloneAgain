const bcrpyt = require("bcrypt");
const jwt = require("jsonwebtoken");
const client = require("../../client");

module.exports = {
  Mutation: {
    login: async (_, { userName, password }) => {
      const user = await client.user.findFirst({ where: { userName } });
      if (!user) {
        return {
          ok: false,
          error: "User not found"
        };
      }
      const passwordOK = await bcrpyt.compare(password, user.password);
      if (!passwordOK) {
        return {
          ok: false,
          error: "Incorrect password."
        };
      }
      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token
      };
    }
  }
};
