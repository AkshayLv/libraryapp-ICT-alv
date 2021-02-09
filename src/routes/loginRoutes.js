const express = require('express');
const loginRouter = express.Router();
const {check, validationResult} = require('express-validator');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

router = nav =>
{   
    loginRouter.get('/', (req,res) =>
    {
        res.render("login",{nav});
    });

    loginRouter.post('/', urlencodedParser, 
    [
        check('username').equals("admin"),
        check('password').equals("12345")
    ], (req,res) =>
    {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
            return res.status(422).jsonp(errors.array());
        }
        else
        {  
            res.redirect("/books");
        }
    });

    return loginRouter;
}

module.exports = router;

