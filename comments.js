// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser to parse the body of the POST request
app.use(bodyParser.json());

// Create a new comments array
const comments = [];

// Create a POST endpoint
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Create a GET endpoint
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

// Path: index.js
// Create a new comment
const newComment = {
  body: 'This is a comment',