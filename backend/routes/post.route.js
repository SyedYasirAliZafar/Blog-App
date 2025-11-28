import express from "express";
import { 
  getPosts, 
  getPost, 
  createPost, 
  deletePost 
} from "../controllers/post.controller.js";

const router = express.Router();

// GET all posts
router.get("/", getPosts);

// GET single post by slug
router.get("/:slug", getPost);

// CREATE a post
router.post("/", createPost);

// DELETE a post
router.delete("/:id", deletePost);

export default router;
