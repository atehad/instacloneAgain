"use strict";

const {
  makeExecutableSchema
} = require("@graphql-tools/schema");

const {
  loadFilesSync
} = require("@graphql-tools/load-files");

const {
  mergeResolvers,
  mergeTypeDefs
} = require("@graphql-tools/merge");

const loadedTypes = loadFilesSync("".concat(__dirname, "/**/*.typeDefs.js"));
const loadedResolvers = loadFilesSync("".concat(__dirname, "/**/*.resolvers.js"));
const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
module.exports = schema;