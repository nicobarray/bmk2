const { GraphQLServer } = require("graphql-yoga");
const gql = require("graphql-tag");

const { prisma } = require("./src/generated/prisma-client");

const fragment = `
fragment BookmarkAsLink on Bookmark {
  id
  link {
    id
    name
    url
  }
}
`;

const resolvers = {
  Query: {
    me: (root, args, ctx, info) =>
      ctx.db.user({ where: { name: "yahwastaken" } }, info),
    bookmarks: (root, args, ctx, info) => ctx.db.bookmarks().$fragment(fragment)
  },
  Node: {
    __resolveType(obj, _context, _info) {
      return obj.__typename;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: gql`
    type User {
      id: ID!
      name: String!
    }

    type Bookmark {
      id: ID!
      link: Link
    }

    type Link {
      id: ID!
      bkmk: Bookmark!
      url: String!
      name: String
      score: Int!
    }

    input TokenInput {
      token: String
    }

    type Query {
      me(data: TokenInput!): User!
      bookmarks(data: TokenInput!): [Bookmark!]!
    }

    interface Node {
      id: ID!
    }
  `,
  resolvers,
  context: req => ({
    ...req,
    db: prisma
  })
});

server.start(({ https, endpoint, port }) =>
  console.log(`Server is running on port ${port}`)
);
