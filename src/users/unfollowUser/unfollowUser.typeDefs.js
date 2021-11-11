const { gql } = require("apollo-server-core");

module.exports = gql`
  type unfollowUserResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    unfollowUser(userName: String!): unfollowUserResult
  }
`;
