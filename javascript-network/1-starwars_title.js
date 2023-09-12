#!/usr/bin/node
const request = require('request');

const id = process.argv(2);
const starWars = `https://swapi-api.alx-tools.com/api/films/:id`;

request(starWars, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
    if (response.statusCode !== 200) {
        console.error(`HTTP Error: ${response.statusCode}`);
        process.exit(1);
    }

    const data = JSON.parse(body);

    console.log(`Title: ${data.title}`);
});