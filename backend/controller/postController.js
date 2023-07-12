import Post from "../models/post.js";

const getPosts = async (req, res) => {
    const posts = await Post.find()

    res.json(posts);
};
const newPost = async (req, res) => {
    const post = new Post(req.body)
    
    try {
         const storedPost = await post.save()
         res.json(storedPost);

    } catch (error) {
        console.log(error)
    }
};
const getPost = async (req, res) => {
    try {
        const { _id } = req.params;
        const post = await Post.findById(_id);
    
        if (!post) {
          const error = new Error('NO FOUND');
          return res.status(404).json({ msg: error.message });
        }
    
        res.json(post);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error get post' });
      }
};
const editPost = async (req, res) => {
    const { id } = req.params 

    const post = await Post.findById(id)

    if (!post) {
        const error = new Error("NO FOUND")
        return res.status(404).json({ msg: error.message});
    }
    

    post.title = req.body.title || post.title;
    post.tech = req.body.tech || post.tech;
    post.text = req.body.text || post.text;
    post.image = req.body.image || post.image;
    post.dateCreate = req.body.dateCreate || post.dateCreate;
    post.writer = req.body.writer || post.writer;

    try {
        const storedPost = await post.save()
        res.json(storedPost);
    } catch (error) {
        console.log(error);
    }


};
const deletePost = async (req, res) => {
    const { id } = req.params 

    const post = await Post.findById(id)

    if (!post) {
        const error = new Error("NO FOUND")
        return res.status(404).json({ msg: error.message});
    }
    if (post.creator.toString() !== req.user._id.toString()){
        const error = new Error("INVALID ACTION")
        return res.status(404).json({ msg: error.message});
    }

    try {
        await post.deleteOne();
        res.json({ msg: "POST DELETE"})
    } catch (error) {
        console.log(error);
    }

};

export {
    getPosts,
    newPost,
    getPost,
    editPost,
    deletePost
}