const express = require('express');
const reload = require('reload')

const port = process.env.PORT || 3000;

const app = express();

//Enable CORS
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(express.static(__dirname + '/src'));


//load homepage
app.get('/', (req, res) => {
    res.send('index.html');
});

//load about page
app.get('/about', (req, res) => {
    res.send('about.html');
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
})