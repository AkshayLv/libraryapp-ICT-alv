const express = require('express');
const signRouter = express.Router();
const {check, validationResult} = require('express-validator');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false});

router = nav =>
{   
    signRouter.get('/', (req,res) =>
    {
        res.render("signup", {nav});
    });

    signRouter.post('/', urlencodedParser,
    [
        check('username').isLength({min: 5}),
        check('email').isEmail(),
        check('password').isStrongPassword(),
    ], (req,res) =>
    {
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
            return res.status(422).jsonp(errors.array());
        }
        else
        {
            res.redirect("/");
        }
    });

    return signRouter;
}

module.exports = router;

