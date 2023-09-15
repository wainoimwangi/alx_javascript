#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
    if (response.statusCode !== 200) {
        console.error(`HTTP Error: ${response.statusCode}`);
        process.exit(1);
    }
    const data = JSON.parse(body);

    let wedgeId = 0;

    data.results.forEach((film) => {
        if (film.characters.includes('https://swapi-api.com/api/people/18/')) {
          wedgeId++;
        }
    });

    console.log(`${wedgeId}`);
});