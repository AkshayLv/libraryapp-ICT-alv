const express = require('express');
const fs = require('fs');
const booksRouter = express.Router();

router = nav =>
{
    var books = JSON.parse(fs.readFileSync('./public/books.json'));
    
    booksRouter.get('/', (req, res) =>
    {
        res.render("books", {nav, books});
    });
    
    booksRouter.get('/:id', (req,res) =>
    {
        const id = req.params.id;
        res.render("singleBook", {nav, book : books[id]})
    });

    return booksRouter;
}

module.exports = router;


