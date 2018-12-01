import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            maxlength: 128,
            index: true,
            trim: true,
            required: true
        },
        description: {
            type: String,
            trim: true
        },
        picture: {
            type: String,
            trim: true,
        },
        location: {
            lat: Number,
            lng: Number
        },
        address: {
            type: String
        },
        contactNumber: {
            type: String,
            maxlength: 15
        }
        //TODO: add comments here
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', userSchema);

export default Post;