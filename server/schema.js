var mongoose = require('mongoose');
var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType;
var GraphQLSchema = graphql.GraphQLSchema;

var categoryMutations = require('./mutation/category');
var categoryQueries = require('./query/category');

mongoose.set('debug', true);

mongoose.connect('mongodb://localhost:27017/bookkeeping', function (error) {
  if (error) console.error(error);
  else console.log('mongo connected')
});

var QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    categories: categoryQueries.categories
  })
});

var MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createCategory: categoryMutations.createCategory,
    deleteCategory: categoryMutations.deleteCategory,
    updateCategory: categoryMutations.updateCategory,
  }
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
});
