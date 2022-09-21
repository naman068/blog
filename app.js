const express= require("express")
const path = require ("path")
const app = express()
const port = 80

app.use('/css',express.static(__dirname + '/css'));
app.use('/img',express.static(__dirname + '/img'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/blogs', (req,res)=>{
    res.sendFile(__dirname + '/templates/blogs.html')
})

app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/templates/contact.html')
})

app.post('/contact', (req,res)=>{
    res.sendFile(__dirname + '/blog/templates/contact.html')
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
