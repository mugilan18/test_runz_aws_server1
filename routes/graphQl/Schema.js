const { gql } = require("apollo-server-express");

const arr = require("./data").users;
const arr1 = require("./data").profile;

const me = arr[0];

const typeDefs = gql`
  type Query {
    me: User
    user(name: String!): User
    users: [User]
    profiles: [Profile]
    profile(runID: String!): Profile
  }

  type Mutation {
    makeUser(name: String!, class: String): User!
    removeUser(name: String!, class: String): User!
  }

  type User {
    name: String!
    class: String
    profile: [Profile]
  }
  type Profile {
    id: ID!
    user: User!
    labType: String
    experimentName: String
  }
`;

const resolvers = {
  Query: {
    me: () => me,
    users: () => arr,
    user: (parent, { name }, context, info) => {
      const user = arr.filter((user) => user.name === name);
      return user[0];
    },
    profiles: () => arr1,
    profile: (parent, { runID }, context, info) => {
      const profile = arr1.filter((profile) => profile.runID === runID);
      return profile[0];
    },
  },
  Mutation: {
    makeUser: (parent, { ...args }) => {
      const user = { ...args };
      arr.push(user);
      return user;
    },
    removeUser: (parent, { ...args }) => {
      const user = { ...args };
      console.log("user", user, "arr", arr);
      if (arr.name === user.name && arr.class === user.class) {
        console.log(arr);
      }
    },
  },
  Profile: {
    user: (parent) => arr[parent.id],
  },
  User: {
    profile: (parent) => parent.projects.map((id) => arr1[id]),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
