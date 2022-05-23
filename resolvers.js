const posts = require('./data');

const resolvers = {
  posts: posts,
  postByID: PostByID,
  postsByTopic: PostsByTopic,
  updatePost: UpdatePost
}

function PostByID({ id }) {
  const resultsArray = posts.filter(post => post.id == id)
  return resultsArray[0];
}

function PostsByTopic({ topic }) {
  return posts.filter(post => post.topic == topic)
};

function UpdatePost({ id, title, author, topic }) {
  const index = id - 1;
  posts[index] = { id, title, author, topic };
  return posts[index]
}

module.exports = resolvers;