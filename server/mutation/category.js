var graphql = require('graphql');
var GraphQLNonNull = graphql.GraphQLNonNull;
var GraphQLString = graphql.GraphQLString;
var CategoryModel = require('../models/category').default;
var CategoryType = require('../types/category').default;


var createCategory = {
    type: CategoryType,
    description: 'Creates category',
    args: {
        name: {
            name: 'Category name',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, args) => {
        var newTodo = new CategoryModel({
            name: args.name,
            completed: false
        });
        newTodo.id = newTodo._id;
        return new Promise((resolve, reject) => {
            newTodo.save(function (err) {
                if (err) reject(err);
                else resolve(newTodo)
            })
        })
    }
};

var deleteCategory = {
    type: CategoryType,
    description: 'Destroy the todo',
    args: {
        id: {
            name: 'Todo Id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, args) => {
        return new Promise((resolve, reject) => {
            CategoryModel.findById(args.id, (err, todo) => {
                if (err) {
                    reject(err)
                } else if (!todo) {
                    reject('Todo NOT found')
                } else {
                    todo.remove((err) => {
                        if (err) reject(err);
                        else resolve(todo)
                    })
                }
            })
        })
    }
};

var updateCategory = {
    type: CategoryType,
    description: 'Edit a todo',
    args: {
        id: {
            name: 'Todo Id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            name: 'Todo title',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, args) => {
        return new Promise((resolve, reject) => {
            CategoryModel.findById(args.id, (err, todo) => {
                if (err) {
                    reject(err);
                    return
                }

                if (!todo) {
                    reject('Todo NOT found');
                    return
                }

                todo.name = args.name;
                todo.save((err) => {
                    if (err) reject(err);
                    else resolve(todo)
                })
            })
        })
    }
};

module.exports = { createCategory, deleteCategory, updateCategory };