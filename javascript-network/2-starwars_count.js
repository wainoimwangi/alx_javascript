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
        const count_id = response.films;
        console.log(count_id);
    })