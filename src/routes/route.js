const express = require('express');
const router = express.Router();



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

const AuthorController = require("../Controller/AuthorController")
router.post("/authors", AuthorController.CreateAuthor)
router.post("/login", AuthorController.Authorlogin)


const BlogController = require("../Controller/BlogController")
const MiddleWare = require("../MiddleWare/auth")
router.post("/blogs", MiddleWare.authenticate, BlogController.CreateBlog)
router.get("/blogs", MiddleWare.authenticate, BlogController.getBlog)
router.put("/blogs/:blogId", MiddleWare.authenticate, MiddleWare.authorise, BlogController.UpdateBlog)
router.delete("/blogs/:blogId", MiddleWare.authenticate, MiddleWare.authorise, BlogController.DeleteBlogbypathparam)
router.delete("/blogs", MiddleWare.authenticate, MiddleWare.verifyAuthorId,BlogController.DeleteBlogbyqueryparam)





module.exports = router;