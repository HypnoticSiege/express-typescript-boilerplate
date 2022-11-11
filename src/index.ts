// Import all modules and libraries needed
import express from 'express';
import path from 'node:path';
import utils from './utils';

const port = 3000;
const app = express()
    .use(express.static('public'))
    .use('/assets', express.static(__dirname + 'public/'))
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, 'views')));

express.static(path.join(__dirname, "./public"));

app.get('/', function (req, res) {
    res.render('index')
});

app.get('/users', function (req, res) {
    res.render('users', {
        users: utils.getAllUsers()
    });
});

app.get('/users/:id', function (req, res) {
    let user = utils.getUser(req.params.id);

    res.render('viewuser', {
        user: user
    });
});

app.listen(port, function () {
    console.clear();
    console.log(`Express/TypeScript Boilerplate`)
    console.log(`Made by Luis Quezada - https://quezada.nl`);
    console.log(`[INFO] Online on localhost:${port}`)
});