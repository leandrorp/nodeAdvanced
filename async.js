const https = require('https');

const start = Date.now();

function doRequest() {

https.request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
                console.log(Date.now() - start);
        });
}).end();

}


doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// make all requests in the same time because is the OS library that makes the request
