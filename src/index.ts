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

app.get('/', async function (req, res) {
    let repoData = await fetch('https://api.github.com/repos/HypnoticSiege/express-typescript-boilerplate')
        .then(res => res.json())
        .then(json => json);
    
    let discordData = await fetch('https://api.lanyard.rest/v1/users/479456028967305247')
        .then(res => res.json())
        .then(json => json);
    
    res.render('index', {
        stars: repoData.stargazers_count,
        forks: repoData.forks_count,
        issues: repoData.open_issues_count,
        language: repoData.language,
        watchers: repoData.watchers,
        owner: repoData.owner,
        status: discordData.data.discord_status
    })
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