const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const port = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary for a SPA's client-side routing to properly work
// Since this route is a "catch all" that matches every get request, be sure to mount API or other routes before it!
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});