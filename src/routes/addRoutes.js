const express = require('express');
const fs = require('fs');
const addRouter = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

router = nav =>
{
    addRouter.get('/', (req,res) =>
    {
        res.render("add",{nav});
    });

    addRouter.post('/', urlencodedParser, (req,res) =>
    {
        var books = JSON.parse(fs.readFileSync('./public/books.json'));
        books.push(req.body);
        fs.writeFileSync('./public/books.json', JSON.stringify(books));
        
        res.render("add", {nav});
    });

    return addRouter;
}

module.exports = router;