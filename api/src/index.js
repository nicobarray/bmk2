const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    me: (root, args, ctx, info) =>
      ctx.db.query.user({ where: { name: "yahwastaken" } }, info),
    bookmarks: (root, args, ctx, info) => ctx.db.query.bookmarks({}, info)
  },
  Node: {
    __resolveType(obj, _context, _info) {
      return obj.__typename;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "https://eu1.prisma.sh/nicolas-barray/bmk2-prisma/dev",
      debug: true
    })
  })
});

server.start(() => console.log("Server is running on http://localhost:4000"));
