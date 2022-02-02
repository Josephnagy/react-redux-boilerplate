const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---flow test to see all incoming requests---
app.use('/', (req, res, next) => {
  console.log(`**** FLOW TEST ****
    Method: ${req.method}
    url: ${req.url}
    body: ${JSON.stringify(req.body)}`);
  next();
});

app.get('/',
  (req, res) => {
    res.status(200).json('boilerplate server running');
  }
);
 
// serve build 
app.get('/bundle.js',
  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
  }
);

// catch-all route handler for any requests to an unknown route 
app.use((req, res) => {
  res.statusCode = 404;
  res.send(`Catch-all route handler: Error code ${res.statusCode} sorry`);
});

// express global handler
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = {};
  Object.assign(errorObj, defaultErr);
  console.log(errorObj);
  console.error(err.stack);
  res.status(500).send(errorObj);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;  
