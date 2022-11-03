const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString} = graphql;

const MovieType = new GraphQLObjectType({
    name:"Movie",
    fields: () => ({
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        genere:{type:GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:"RootQuery",
    fields: {
        /*
        the query will look like:
            movie(id:123)
        */
        movie:{
            type:MovieType,
            args:{id:{type:GraphQLString}},
            resolve(parent, args){
                //code to get data from db
            }
        }
    }
});

module.export = new graphql.GraphQLSchema({
    query: RootQuery
})

