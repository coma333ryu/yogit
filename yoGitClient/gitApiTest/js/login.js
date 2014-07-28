/**
* Created by yoonjungboo on 2014. 7. 25..
*/

/**
 * Created by yoonjungboo on 2014. 7. 25..
 */
var github = require('octonode');
var jq = require('../lib/jquery-2.1.0.min.js');


jq("#submitAc").bind("click", function() {

    if(valCheck(jq("#name").val()) && valCheck(jq("#passwd").val())){

        var client = github.client({
            username: jq("#name").val(),
            password: jq("#passwd").val()
        });

        client.get('/user', {}, function (err, status, body, headers) {
            if(err != null){
                alert("your name or password is error!!!");
            }else{
                console.log(body);
//                console.log(__dirname);
//                window.resizeTo(1500,1500);
//                location.href = "/Users/yoonjungboo/coma_dev/yoGit/yoGitClient/gitApiTest/index.html";
            }
        });
    }else{
        alert("your name or password is null !!!");
    }
});


function valCheck(args){
    if(args == null || args == ''){
        return false;
    }else{
        return true;
    }
}








/*
var express = require('express');
var passport = require('passport');
var util = require('util');

var GithubStrategy = require('passport-github').Strategy;

var AUTH_INFO = {
    github: {
        clientID: '2944241d2a777d8a9f51',
        clientSecret: '9534673a8ee19fa1f7fe9942881896cdf4fe7c2c',
        callbackURL: "http://localhost:8080/auth/github/callback"
    }
}

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// config
passport.use(new GithubStrategy({
        clientID: AUTH_INFO.github.clientID,
        clientSecret: AUTH_INFO.github.clientSecret,
        callbackURL: AUTH_INFO.github.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));


//var app = express.createServer();

var app = express();


app.get('/auth/github',passport.authenticate('github'),function(req, res){
    console.log('aaaaa');
});

app.get('/auth/github/callback',passport.authenticate('github', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/account');
    });

app.listen(3000);
*/
//var https = require('https');
//
//var options = {
//    host: 'github.com',
//    port: 80,
//    path: '/login/oauth/authorize',
//    method: 'GET',
//    client_id: "2944241d2a777d8a9f51",
//    client_secret:"9534673a8ee19fa1f7fe9942881896cdf4fe7c2c",
//    headers: {'user-agent':'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'}
//    key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
//    cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
//    agent: "cb2de17a173754799863fce9a03062f2cee0cb24":x-oauth-basic
//};
//
////var req = https.request(options, function(res) {
////    console.log("statusCode: ", res.statusCode);
////    console.log("headers: ", res.headers);
////    console.log("headers: ", res);
////
////    res.on('data', function(d) {
////        process.stdout.write(d);
////    });
////});
//
////req.end();
//
////req.on('error', function(e) {
////    console.error(e);
////});
//
//
////https.get('https://api.github.com/users/coma333ryu', function(res) {
////    console.log("statusCode: ", res.statusCode);
////    console.log("headers: ", res.headers);
////    alert("statusCode: ", res.statusCode);
////
////    res.on('data', function(d) {
////        process.stdout.write(d);
////    });
////
////}).on('error', function(e) {
////        console.error(e);
////    });
//
///*
//https.get("https://api.github.com/users/coma333ryu", function(res) {
//    console.log("Got response status: " + res.statusCode);
//    console.log("Got response: " + JSON.stringify(res.headers));
//    console.log("Got response: " + res.headers);
//}).on('error', function(e) {
//    console.log("Got error: " + e.message);
//});
//*/