const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const nav = 
[
{link: "/books", name: "Books"}, 
{link: "/authors", name: "Authors"},
{link: "/login", name: "Login"},
{link: "/signup", name: "Signup"},
{link: "/add", name: "Add New Book"}
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signRouter = require('./src/routes/signRoutes')(nav);
const addRouter = require('./src/routes/addRoutes')(nav);

app.use(express.static('./public'));
app.use("/books", booksRouter);
app.use("/authors", authRouter);
app.use("/login", loginRouter);
app.use("/signup", signRouter);
app.use("/add", addRouter);

app.set('view engine','ejs');
app.set('views',__dirname + '/src/views');


app.get('/', (req,res)=>
{
    res.render("index",{nav});
});

app.listen(port);
