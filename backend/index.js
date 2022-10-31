// importing express
const express = require('express');
const Userrouter = require('./Routers/Userrouter');
const filterRouter = require('./Routers/filterRouter');
const utilRouter = require('./Routers/util');
const cors = require('cors');
// installing express
const app = express();
const port = 5000;
// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use('/user', Userrouter);
app.use('/filter', filterRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'))
// creating rout or end points
app.get('/', (req, res) => {
    res.send('Responce from express');
});
app.get('/home', (req, res) => {
    res.send('send message');
});
app.get('/add', (req, res) => {
    res.send('Responce from add');
});
app.listen(port, () => {
    console.log('express server started....')
});