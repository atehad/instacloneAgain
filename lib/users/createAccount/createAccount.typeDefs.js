"use strict";

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const {
  gql
} = require("apollo-server-core");

module.exports = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type CreateAccountResult {\n    ok: Boolean!\n    error: String\n  }\n\n  type Mutation {\n    createAccount(\n      firstName: String!\n      lastName: String\n      userName: String!\n      email: String!\n      password: String!\n    ): User\n  }\n"])));