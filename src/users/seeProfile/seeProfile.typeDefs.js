const { gql } = require("apollo-server-core");

module.exports = gql`
  type Query {
    seeProfile(userName: String!): User
  }
`;
