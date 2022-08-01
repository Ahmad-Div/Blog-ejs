//require the modules

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

//modules ************

const app = express();

app.set("view engine", "ejs");

//
//
//

//app using .......

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

//app using *************

//
//
//

//variables**************

const homeStartingContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const aboutContent =
  "This is Ahmad Software blog website , that he created after learning node.js and express.js and a lot about EJS";

const contactContent =
  "To contact Ahmad Software directly you can message him right now in facebook or discord or telegram";

const posts = [];

//variables***************

//
//
//

//get router *************

app.get("/", function (req, res) {
  res.render("home", {
    homeContent: homeStartingContent,
    posts: posts,
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.get("/post/:topic", function (req, res) {
  posts.forEach((post) => {
    if (
      lodash.lowerCase(post.postTitle) == lodash.lowerCase(req.params.topic)
    ) {
      res.render("post", {
        title: post.postTitle,
        content: post.postContent,
      });
    }
  });
});

//get router ************

//
//
//

//post router ***************

app.post("/compose", function (req, res) {
  let postTitle = req.body.postTitle;
  let postContent = req.body.postContent;
  posts.push({
    postTitle: postTitle,
    postContent: postContent,
  });
  res.redirect("/");
});

//post router ***************

//
//
//

//server listen **************

app.listen(3000, function () {
  console.log("Ahmad Software's server is running!");
});

//server listen **************
