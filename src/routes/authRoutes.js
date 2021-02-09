const express = require('express');

const authRouter = express.Router();

router = nav =>
{
    var authors = 
    [
        {
            name : "Antoine de Saint-Exupéry",
            nationality : "France",
            img : "antoine.jpg"
        },
        {
            name : "Charles Dickens",
            nationality : "England",
            img : "charles.jpg"
        },
        {
            name : "J.R.R. Tolkien",
            nationality : "England",
            img : "tolk.jpg"
        },
        {
            name : "Neil Gaiman",
            nationality : "England",
            img : "neil.jpg"
        },
        {
            name : "Rick Riordan",
            nationality : "U.S.A",
            img : "rick.jpg"
        }
    ];

    authRouter.get('/', (req,res) =>
    {
        res.render("authors", {nav,authors});
    })

    authRouter.get('/:id', (req,res) =>
    {
        const id = req.params.id;
        res.render("singleAuth", {nav, author : authors[id]});
    });

    return authRouter;
}

module.exports = router;

