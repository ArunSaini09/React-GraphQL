const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;
const _ = require("lodash")

//dummy data
let movies = [
    {id:"1", name:"The GodFather", genere:"Crime"},
    {id:"2", name:"Back To the Future", genere:"Sci-Fi"},
    {id:"3", name:"Dumb and Dumber", genere:"Comedy"}
];


const MovieType = new GraphQLObjectType({
    name:"Movie",
    fields: () => ({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genere:{type:GraphQLString}
    })
});

//defines how we will jump into the graph and resolve queries 
const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields: {
       //this key(movie) is what the front-end will use to make the queries
       //if the key was 'movies', then the front-end will use 'movies' to make its queries
        movie:{
            //this query is of type MovieType
            type:MovieType,
            //these are the arguments expected to be sent in the front-end request
            args:{id:{type:GraphQLString}},
            resolve(parent, args){
                //code to get data from db
                return _.find(movies, {id: args.id});
            }
        }
    }
});


/*
    the front-end query for the movie will look like:
        movie(id:"123"){ <--- this (id:"123") is what the args key/value is setting-up
            name,
            genre
        }
    so, the query is saying, for movie with id 123 get me the name and genre
*/

module.export = new GraphQLSchema({
    query: RootQuery
})

