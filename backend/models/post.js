import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    
    title: {
        type: String,
        trim: true,
        required: true,
    },
    tech: {
        type: String,
        trim: true,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },
    dateCreate: {
        type: String,
        trim: true,
        required: true,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    writer: {
        type: String,
        trim: true,
        required: true,
    }
},
{
    timestamps: true,
  }

)

const Post = mongoose.model("Post", postSchema);
export default Post;