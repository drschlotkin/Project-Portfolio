const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

router.get('/', (req, res) => {
    res.locals.data = data.projects
    res.render('index');
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/projects/:id', (req, res) => {  
    const { id } = req.params;
    const myProject = data.projects[id]
    res.render('project', myProject)
})

module.exports = router;