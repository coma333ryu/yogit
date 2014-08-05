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
                console.log(status);
                console.log(headers);


//                console.log(client.me());
//                console.log(client.user(jq("#name").val()));

//                var ghme        = client.me();
//                var ghuser      = client.user(jq("#name").val());
//                var ghrepo      = client.repo(jq("#name").val());
//                var ghorg       = client.org('flatiron');
//                var ghissue     = client.issue(jq("#name").val() + '/hub', 37);
//                var ghmilestone = client.milestone(jq("#name").val() + '/hub', 37);
//                var ghlabel     = client.label(jq("#name").val() + '/hub', 'todo');
//                var ghpr        = client.pr(jq("#name").val() + '/hub', 37);
//                var ghgist      = client.gist();
//                var ghteam      = client.team(37);

//                ghrepo.info(function(b,h){
//                    console.log(b);
//                    console.log(h);
//                });

//                ghme.repos(test);

//                function test(data2,data3){
////                    console.log(data);
//                    console.log(data2);
//                    console.log(data3);
//                }

//                var ghsearch = client.search();

//                console.log(ghme);
//                console.log(ghuser);
//                console.log(ghrepo.info);
//                console.log(ghorg);
//                console.log(ghissue);
//                console.log(ghmilestone);
//                console.log(ghlabel);
//                console.log(ghgist);
//                console.log(ghteam);
//                console.log(__dirname);
//                window.resizeTo(1500,1500);
                location.href = "/Users/yoonjungboo/coma_dev/yoGit/yoGitClient/gitApiTest/index.html";
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