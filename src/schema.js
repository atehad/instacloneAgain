const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeResolvers, mergeTypeDefs } = require("@graphql-tools/merge");

const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`);

const typeDefs = mergeTypeDefs(loadedTypes);
const resolvers = mergeResolvers(loadedResolvers);

module.exports = { typeDefs, resolvers };
