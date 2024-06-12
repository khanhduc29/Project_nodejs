
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const slug = require('mongoose-slug-generator');
// const mongooseDelete = require('mongoose-delete')

const Course = new Schema({
    name:{ type: String, required: true},
    gia:{ type: String, required: true},
    img:{ type: String },
    slug:{ type: String},
    // createAt:{ type: Date, default: Date.now},
    // updateAt:{ type: Date, default: Date.now},
}, {
    timestamps: true,
});
// add plug in
// mongoose.plugin(slug);
// Course.plugin(mongooseDelete)


module.exports = mongoose.model('Course', Course);