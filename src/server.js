require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema.js");
const { getUser, protectedResolver } = require("./users/users.utils");

const PORT = process.env.PORT;
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
      protectedResolver
    };
  }
});

const app = express();
app.use(logger("tiny"));
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));
app.listen({ port: PORT }, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}/graphql`);
});
