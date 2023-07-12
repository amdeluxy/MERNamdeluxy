import express from 'express'

import {  
    getPosts,
    newPost,
    getPost,
    editPost,
    deletePost,
} from "../controller/postController.js"
import checkAuth from "../middleware/checkAuth.js"

const router = express.Router();

router
    .route("/")
    .get(getPosts)
    .post( newPost);

router
    .route("/:_id")
    .get(getPost)
    .put(checkAuth, editPost)
    .delete(checkAuth, deletePost);
    
export default router;


