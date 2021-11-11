"use strict";

require("core-js/modules/es.promise.js");

const bcrpyt = require("bcrypt");

const client = require("../../client");

module.exports = {
  Mutation: {
    createAccount: async (_, _ref) => {
      let {
        firstName,
        lastName,
        userName,
        email,
        password
      } = _ref;

      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{
              userName
            }, {
              email
            }]
          }
        });

        if (existingUser) {
          throw new Error("This username/email is already taken.");
        }

        const uglyPassword = await bcrpyt.hash(password, 10);
        return client.user.create({
          data: {
            firstName,
            lastName,
            userName,
            email,
            password: uglyPassword
          }
        });
      } catch (e) {
        return e;
      }
    }
  }
};