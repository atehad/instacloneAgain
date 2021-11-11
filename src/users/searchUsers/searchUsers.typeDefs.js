const { gql } = require("apollo-server-core");

module.exports = gql`
  type Query {
    searchUsers(keyword: String!, lastId: Int): [User]
  }
`;
