var express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const resolvers = require('./resolvers');

var app = express();
app.use(cors())
app.use(graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))


app.listen(4000, () => {
  console.log('server running on http://localhost:4000/lectures')
});