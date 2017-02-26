// Scott Nedvesky
// Web API CSCI 3800
// HW2 - Create a simple Server that accepts requests and creates responses

var express = require('express');
var app = express();

// GETs
app.get('/gets', function(req, res){
    if (req.method === 'GET')
        if (Object.keys(req.query).length > 0) {
            res.send('GET:' + req.query);
        } else {
            res.send('Neither a header or query parameter were successfully sent!');
    }
});

// POST
app.post('/posts', function (req, res) {
    if (req.method === 'POST')
        if (Object.keys(req.query).length > 0) {
            res.send('POST:' + req.query);
        } else {
            res.send('Neither a header or query parameter were successfully sent!');
    }
});

// PUT
app.put('/puts', function (req, res) {
    if (req.method === 'PUT')
        if (Object.keys(req.query).length > 0) {
            res.send('PUT:' + req.query);
        } else {
            res.send('Neither a header or query parameter were successfully sent!');
    }
});

// DELETE
app.delete('/deletes', function (req, res) {
    if (req.method === 'DELETE')
        if (Object.keys(req.query).length > 0) {
            res.send('DELETE:' + req.query);
    } else {
        res.send('Neither a header or query parameter were successfully sent!');
    }
});


// Bad Request Response
app.use('*', function(req, res, next) {
    var ER = new Error();
    ER.status = 404;
    ER.message = "Rejected: HTTP method Not Accepted";
    next(ER);
});

//  Base URL Request Rejection
app.all('/', function (req, res) {

    res.status(403).send('Rejected: URN Not Specified');
});

//  404 Errors
app.use(function(err, req, res, next) {

    if(err.status !== 404) {
        return next();
    }

    res.send(err.message || ' nada ');
});

app.listen(8080, function() {

    var p1 = server.address().port
    var h1 = server.address().address

    console.log("Server running on http://%s:%s", h1, p1)

}