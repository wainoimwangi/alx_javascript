#!/usr/bin/node
// import request module
const request = require('request')

// check if the url is the first commandline arg
if (process.argv.length < 3) {
    console.error('Input url');
    process.exit(1);
}

// get the url from commandline arg
const url = process.argv[2];

request.get(url, function (error, response) {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
    console.log('code: ${response.statusCode}');
});
