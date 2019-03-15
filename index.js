getDockerHost = require('get-docker-host');
isInDocker = require('is-in-docker');

checkDocker = () => {
    return new Promise((resolve, reject) => {
        if (isInDocker()) {
            getDockerHost((error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        } else {
            resolve(null);
        }
    });
};


var express = require('express');
var app = express();
app.get('/', function (req, res) {
    checkDocker().then((addr) => {
        if (addr) {
            res.send('Docker host is ' + addr);
        } else {
            res.send('Not in Docker');
        }
    }).catch((error) => {
        console.log('Could not find Docker host: ' + error);
    });
    
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});