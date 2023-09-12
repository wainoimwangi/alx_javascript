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
    const filmData = JSON.parse(body);

    let wedgeAntillesMovies = 0;

    filmData.results.forEach((film) => {
        if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
          wedgeAntillesMovies++;
        }
    });

    console.log(`${wedgeAntillesMovies}`);
});