const { gql } = require("apollo-server-core");

module.exports = gql`
  type seeFollowingResult {
    ok: Boolean!
    error: String
    following: [User]
  }

  type Query {
    seeFollowing(userName: String!, lastId: Int): seeFollowingResult!
  }
`;
