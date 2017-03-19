var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLInt = graphql.GraphQLInt;
var GraphQLID = graphql.GraphQLID;
var GraphQLString = graphql.GraphQLString;

var CategoryType = new GraphQLObjectType({
    name: 'category',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'id'
        },
        name: {
            type: GraphQLString,
            description: 'Category name'
        },
        updatedAt: {
            type: GraphQLInt,
            description: 'Flag to mark if the task is completed'
        }
    })
});

module.exports.default = CategoryType;