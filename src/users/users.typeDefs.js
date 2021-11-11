const { gql } = require("apollo-server-core");

module.exports = gql`
  type User {
    id: String!
    firstName: String!
    lastName: String
    userName: String!
    email: String!
    createdAt: String!
    updatedAt: String!
    bio: String
    avatar: String
    follower: [User]
    following: [User]
    totalFollower: Int!
    totalFollowing: Int!
    isMe: Boolean!
    isFollowing: Boolean!
  }
`;
