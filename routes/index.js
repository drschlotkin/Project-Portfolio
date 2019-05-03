// Global express variables
const express = require('express');
const router = express.Router();
const data  = require('../data/data.json');


// Home page
router.get('/', (req, res) => {
    res.locals.data = data.projects
    res.render('index');
});


// About page
router.get('/about', (req, res) => {
    res.render('about');
});


// Projects page
router.get('/projects/:id', (req, res) => {  
    const { id } = req.params;
    
    const myProject = data.projects[id];
    res.render('project', myProject);
});


// Export this page to app.js
module.exports = router;