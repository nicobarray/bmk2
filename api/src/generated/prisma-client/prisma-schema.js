module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBookmark {
  count: Int!
}

type AggregateLink {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bookmark {
  id: ID!
  link: Link
}

type BookmarkConnection {
  pageInfo: PageInfo!
  edges: [BookmarkEdge]!
  aggregate: AggregateBookmark!
}

input BookmarkCreateInput {
  link: LinkCreateOneWithoutBkmkInput
}

input BookmarkCreateOneWithoutLinkInput {
  connect: BookmarkWhereUniqueInput
}

type BookmarkEdge {
  node: Bookmark!
  cursor: String!
}

enum BookmarkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BookmarkPreviousValues {
  id: ID!
}

type BookmarkSubscriptionPayload {
  mutation: MutationType!
  node: Bookmark
  updatedFields: [String!]
  previousValues: BookmarkPreviousValues
}

input BookmarkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BookmarkWhereInput
  AND: [BookmarkSubscriptionWhereInput!]
  OR: [BookmarkSubscriptionWhereInput!]
  NOT: [BookmarkSubscriptionWhereInput!]
}

input BookmarkUpdateInput {
  link: LinkUpdateOneWithoutBkmkInput
}

input BookmarkUpdateOneRequiredWithoutLinkInput {
  connect: BookmarkWhereUniqueInput
}

input BookmarkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  link: LinkWhereInput
  AND: [BookmarkWhereInput!]
  OR: [BookmarkWhereInput!]
  NOT: [BookmarkWhereInput!]
}

input BookmarkWhereUniqueInput {
  id: ID
}

type Link {
  id: ID!
  bkmk: Bookmark!
  url: String!
  name: String
  score: Int!
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  bkmk: BookmarkCreateOneWithoutLinkInput!
  url: String!
  name: String
  score: Int
}

input LinkCreateOneWithoutBkmkInput {
  create: LinkCreateWithoutBkmkInput
  connect: LinkWhereUniqueInput
}

input LinkCreateWithoutBkmkInput {
  url: String!
  name: String
  score: Int
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  name_ASC
  name_DESC
  score_ASC
  score_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LinkPreviousValues {
  id: ID!
  url: String!
  name: String
  score: Int!
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  bkmk: BookmarkUpdateOneRequiredWithoutLinkInput
  url: String
  name: String
  score: Int
}

input LinkUpdateManyMutationInput {
  url: String
  name: String
  score: Int
}

input LinkUpdateOneWithoutBkmkInput {
  create: LinkCreateWithoutBkmkInput
  update: LinkUpdateWithoutBkmkDataInput
  upsert: LinkUpsertWithoutBkmkInput
  delete: Boolean
  disconnect: Boolean
  connect: LinkWhereUniqueInput
}

input LinkUpdateWithoutBkmkDataInput {
  url: String
  name: String
  score: Int
}

input LinkUpsertWithoutBkmkInput {
  update: LinkUpdateWithoutBkmkDataInput!
  create: LinkCreateWithoutBkmkInput!
}

input LinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  bkmk: BookmarkWhereInput
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  score: Int
  score_not: Int
  score_in: [Int!]
  score_not_in: [Int!]
  score_lt: Int
  score_lte: Int
  score_gt: Int
  score_gte: Int
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

input LinkWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBookmark(data: BookmarkCreateInput!): Bookmark!
  updateBookmark(data: BookmarkUpdateInput!, where: BookmarkWhereUniqueInput!): Bookmark
  upsertBookmark(where: BookmarkWhereUniqueInput!, create: BookmarkCreateInput!, update: BookmarkUpdateInput!): Bookmark!
  deleteBookmark(where: BookmarkWhereUniqueInput!): Bookmark
  deleteManyBookmarks(where: BookmarkWhereInput): BatchPayload!
  createLink(data: LinkCreateInput!): Link!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  bookmark(where: BookmarkWhereUniqueInput!): Bookmark
  bookmarks(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bookmark]!
  bookmarksConnection(where: BookmarkWhereInput, orderBy: BookmarkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BookmarkConnection!
  link(where: LinkWhereUniqueInput!): Link
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  bookmark(where: BookmarkSubscriptionWhereInput): BookmarkSubscriptionPayload
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
}
`
      }
    