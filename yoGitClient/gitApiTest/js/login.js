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