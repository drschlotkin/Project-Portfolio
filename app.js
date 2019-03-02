const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;


// Initialize App
const app = express();


// Serve static files in public folder
app.use('/static', express.static('public'));


// Use PUG for template engine
app.set('view engine', 'pug');


// Access main routers in index.js
app.use(routes);


// Create error object
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err); 
});


// Error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status)
    res.render('error');
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}..`);
});