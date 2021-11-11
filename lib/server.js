"use strict";

require("dotenv").config();

const {
  ApolloServer
} = require("apollo-server");

const schema = require("./schema.js");

const PORT = process.env.PORT;
const server = new ApolloServer({
  schema
});
server.listen(PORT).then(() => console.log("\uD83D\uDE80 Server is running on http://localhost:".concat(PORT, "/")));