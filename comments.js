// Create web server
// Create routes
// Create comment form
// Create comments
// Create comment list
// Create delete comment

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Create routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 3. Create comment form
app.get('/comments/new', (req, res) => {
    res.send('Comment form');
});

// 4. Create comments
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// 5. Create comment list
app.get('/comments/:id', (req, res) => {
    res.send('Comment list');
});

// 6. Create delete comment
app.delete('/comments/:id', (req, res) => {
    res.send('Delete comment');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});