#!/usr/bin/node
// script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

const multi_languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

let len = multi_languages.length;

for (let i = 0; i < len; i++) {
    console.log(multi_languages[i]);
}
