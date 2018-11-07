// Setup (configuration of your app)
// -----------------------------------------------------------------------------
// #############################################################################

// include the "express" npm package in this program
const express = require("express");

// "app" variable represents our application and its settings
// (all configuration and content will be defined through "app")
const app = express();

// the "listen()" method enables our program to accept connections from clients
// (the arrow function will run when the server is ready for connections)
app.listen(3000, () => {
  console.log("Our server is READY!");
});

// Connect the "public/" folder to our Express app
// (makes files inside "public/" available through our server's domain)
app.use(express.static(__dirname + "/public"));
  // ("__dirname" is "directory name" - the folder where this file is located)



// Routes (content of your app)
// -----------------------------------------------------------------------------
// #############################################################################
// Express Route - defines a page of content on the website
// 2 ARGUMENTS: URL and an arrow function that defines the content
app.get("/", (request, response, next) => {
  // "response" controls what clients will get when they visit this route
  response.sendFile(__dirname + "/views/home-page.html");
    // ("__dirname" is "directory name" - the folder where this file is located)
});

app.get("/cat", (request, response, next) => {
  response.sendFile(__dirname + "/views/cat-page.html");
    // ("__dirname" is "directory name" - the folder where this file is located)
});
