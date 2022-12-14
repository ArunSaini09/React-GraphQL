const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP; 
const schema = require('./schema/schema');

const app = express();

//on the graphql endpoint, run the graphqlHTTP middleware
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}));


app.listen(4000, ()=>{
    console.log('listening on 4000');
});