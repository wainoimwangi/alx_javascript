#!/usr/bin/node
const request = require('request');

const url = process.argv[2];
const parts = [];

request.get(url+ '/'+18, {encoding: 'utf-8'})
    .on('data', data => {
        parts.push(data);
    })
    .on('complete', () => {
        response = parts;
        const count = response.films;
        console.log(count);
    })
    .on('response', response => {
        if (response.statusCode !== 200) {
            console.error(`HTTP Error: ${response.statusCode}`);
            process.exit(1);
        }
    })
    .on('error', error => {
        console.error('Error:', error.message);
        process.exit(1);
    })
