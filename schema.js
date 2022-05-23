const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Post {
  id:Int!
  title:String!
  author: String!
  topic:String!
},

type Query {
  posts: [Post!]!
  postByID(id:Int!): Post
  postsByTopic(topic:String): [Post]
},

type Mutation {
  updatePost(id:Int!, title:String!, author: String!, topic:String!): Post!
}

`)

module.exports = schema;