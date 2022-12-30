const express = require('express');

const app = express();
app.set('view engine', 'ejs');


app.listen(5000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'How I met your mother', snippet: 'B11', description: 'Bla'},
        {title: 'How I met your father', snippet: 'B22', description: 'Blalablu'},
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
    res.render('createBlog', { title: 'Create'});
})
app.use((req, res) => {
    res.status(404).render('404');
})