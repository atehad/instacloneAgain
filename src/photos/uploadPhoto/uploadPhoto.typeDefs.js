const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mutation {
    uploadPhoto(file: String!, caption: String): Photo
  }
`;
