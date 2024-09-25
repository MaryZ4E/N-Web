const express = require('express');
const app = express();
const port = 3000;
var expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs');
app.use(expressLayouts);
app.use(express.static('public'))
app.set('layout', './layouts/main')

app.get('/', (req,res)=>{

    res.render('home');
})
app.get('/about', (req,res)=>{

    res.render('about');
})
app.get('/contact', (req,res)=>{

    const contact = {

        "name":"jesus",
        "email":"jesus@gmail.com",
        "phone":"468468333",
        "address":"Av.Tec. #600"
    }

    res.render('contact',{contact: contact});
})

app.get('/services',(req, res)=>{
    const services=[
        {
         "name":"web design",
         "description":"bla bla bla...",
         "price":"$5744",

        },
         {
         "name":"Networking design",
         "description":"bla bla bla...",
         "price":"$5744",

        },
         {
         "name":"Server administration",
         "description":"bla bla bla...",
         "price":"$5744",

        },
    ]
    res.render('services',{services : services})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));