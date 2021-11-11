const { gql } = require("apollo-server");

module.exports = gql`
  type seeFollowersResult {
    ok: Boolean!
    error: String
    followers: [User]
    totalPages: Int
  }

  type Query {
    seeFollowers(userName: String!, page: Int!): seeFollowersResult!
  }
`;
