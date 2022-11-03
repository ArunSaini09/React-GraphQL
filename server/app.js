const express = require('express');
const {graphqlHTTP} = require('express-graphql'); 
const schema = require('./schema/schema');
const app = express();

//the graphql route that will be passed to the graphqlHTTP object
app.use('/graphql', graphqlHTTP({
    schema
}));


app.listen(4000, ()=>{
    console.log('listening on 4000');
});