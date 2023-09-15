#!/usr/bin/node
const request = require('request');

const url = process.argv[2];
const path = process.argv[3];
const fs = require('fs');

request(url, (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        fs.writeFile(path, body, 'utf8', (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
});