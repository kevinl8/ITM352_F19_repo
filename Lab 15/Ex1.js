var app = express();
var myParser = require("body-parser");

//When a request it made it to the server and it has a cookie with that request, this middleware takes that cookie and turns it into an object that can be used.
var cookieParser = require('cookie-parser');
app.use(cookieParser());


var session = require('express-session');

app.use(session({secret: "ITM352 rocks!"}));

app.post("/login", function (request, response) {
    if (typeof request.cookies.username != 'undefined') {
        response.send(`Welcome back ${request.cookies.username}!` + '<br>' + `You last logged in on ${request.session.last_login}`);
    }
