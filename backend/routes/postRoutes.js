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
    .get(checkAuth, getPosts)
    .post(checkAuth, newPost);

router
    .route("/:id")
    .get(checkAuth, getPost)
    .put(checkAuth, editPost)
    .delete(checkAuth, deletePost);
    
export default router;


