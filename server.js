'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
// const graphqlHTTP = require('express-graphql');
// const schema = require('./api/schema/schema');


// Routes
const userRoutes = require('./api/routes/user');
const entryRoutes = require('./api/routes/entry');

const app = express();


// set the port
const PORT = process.env.PORT || 3000;

// general error handler
const errorHandler = (err, req, res, next) => {
  res.send({ error: err.message.split(',') })
}

// // Setup body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // input validation
app.use(expressValidator());

// // enable cors
app.use(cors({ credentials: true, origin: true }));

// // Need to read cookie
app.use(cookieParser());

// Routes will begin with `/api/auth`
app.use('/api/user', userRoutes);
app.use('/api/entries', entryRoutes);


// error handler
app.use(errorHandler);

// bind express with graphql
// graphql - alternative to routes (REST API architecture)
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));


// set directory for public files. in my case, use folder called public
const staticPath = path.join(__dirname, '/client/public');
app.use(express.static(staticPath));

// set port property of app to use PORT
app.set('port', PORT);

// listen
app.listen(app.get('port'), () => {
    console.log(`Express server is running on port ${PORT}`);
});