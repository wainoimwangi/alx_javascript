#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
const url = process.argv[3];

request(url + movieId, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }
    const movies = JSON.parse(body);

    for (const movie of movies.characters) {
        request.get(movie, (error, response, body1) => {
            if (error) {
                console.log(error);
            }
            const movieData = JSON.parse(body);
            console.log(movieData.name);
        });
    }
});