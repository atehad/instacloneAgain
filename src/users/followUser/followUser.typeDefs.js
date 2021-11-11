const { gql } = require("apollo-server");

module.exports = gql`
  type followUserResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    followUser(userName: String!): followUserResult
  }
`;
