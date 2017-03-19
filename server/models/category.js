var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema definition
var CategoryModel = mongoose.model('Category', new Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    updatedAt: Date
}));

module.exports.default = CategoryModel;