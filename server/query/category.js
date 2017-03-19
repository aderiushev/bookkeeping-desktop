var graphql = require('graphql');
var GraphQLList = graphql.GraphQLList;

var CategoryType = require('../types/category').default;
var CategoryModel = require('../models/category').default;

var categories = {
    type: new GraphQLList(CategoryType),
        resolve: () => {
        return new Promise((resolve, reject) => {
            CategoryModel.find((err, categories) => {
                if (err) reject(err);
                else resolve(categories)
            })
        })
    }
};

module.exports = { categories };