"use strict";

const client = require("../../client");

module.exports = {
  Query: {
    seeProfile: (_, _ref) => {
      let {
        userName
      } = _ref;
      return client.user.findUnique({
        where: {
          userName
        }
      });
    }
  }
};