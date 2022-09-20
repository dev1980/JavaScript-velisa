const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const { json } = require("express");
// GET, POST, PUT, DELETE  // API

// CRUD - database
const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + "/index.html"));
});


// app.get("/about", (req, res)=>{
//     res.send("<h1>About Me page </h1>");
// });

// app.get("/contact", (req, res)=>{
//     res.send("<h1>Contact Me Page</h1>");
// });


app.post('/hello', function(req, res){
    const name = req.body.fname;
    const lastname = req.body.lname;
    res.send(`Your first name is ${name} and last name is ${lastname}`);
 });



app.listen(port, ()=>{
    console.log(`Server is running on pirt ${port}`)
})