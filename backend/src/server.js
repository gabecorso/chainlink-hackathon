const express = require('express');
const path = require('path');
const routes = require('./routes');
const asyncMiddleware = require('./asyncMiddleware');
const app = express();


//Test Heroku deployment

app.use(express.static(path.join( __dirname, '/../../fe/build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'/../../fe/build/index.html'));
});

app.use('/api', routes.apiRoutes);

app.all('*', asyncMiddleware(async (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    err.status = 'fail';
    err.statusCode = 404;
    

    next(err);
}));

// error handling middleware
app.use((err, req, res, next) => {
    err.statusCode =err.statusCode || 500;
    err.status = err.status || 'error';
    console.log(err.toString());
    console.log(err.status);

    return res
        .status(err.statusCode)
        .json({ status: err.status, err: err.toString() });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



module.exports = app;