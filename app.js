const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const app = express();
app.set('view engine', 'ejs');

const dbURi = 'mongodb+srv://ViDA:test12345@cluster0.3hmjro0.mongodb.net/node-blg?retryWrites=true&w=majority';
mongoose.connect(dbURi)
.then((result) => {console.log(app.listen(5000))})
.catch((err) => {console.log("Error connecting")})


app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'How I met your mother', snippet: 'B11', description: "It's a dying earth fantasy story about found families. It kicks off amid the dunes with a birth in the family. (Note that: the old are not wise in this story). And there's a twist! The prophecy does not say that the protagonist will be the Chosen One."},
        {title: 'How I met your sister', snippet: 'B22', description: 'Jessica walked over to the window and reflected on her cold surroundings. She had always loved industrial Glasgow with its anxious, ashamed arches. It was a place that encouraged her tendency to feel fuzzy. Then she saw something in the distance, or rather someone. It was the a thoughtful figure of Mike Lakeman l figure of Mike Lakeman.'},
    ]
    res.render('index', { title: 'Home', blogs });
})

app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>')
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', {title: 'About'});
})

app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

app.get('/blogs/create', (req, res) => {
    res.render('createBlog', { title: 'Create Blog'});
})
app.use((req, res) => {
    res.status(404).render('404', {title:"404"});
})