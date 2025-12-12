import mongoose, { Schema } from "mongoose";

const blogSchem = new Schema({
    title: {
        type: String,
        required: true,
    },
    desceiption: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    authorImg: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

const BlogModel = mongoose.model("blog", blogSchem);

export default BlogModel;