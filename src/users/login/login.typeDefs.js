const { gql } = require("apollo-server-core");

module.exports = gql`
  type LoginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    login(userName: String!, password: String!): LoginResult!
  }
`;
