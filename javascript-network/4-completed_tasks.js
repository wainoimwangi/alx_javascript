#!/usr/bin/node
const request = require('request');

const url = process.sys.argv[2];
const num = {};

request(url, (error, response, body) => {
    if (error) {
        console.log(error)
    } else {
        const tasks = JSON.parse(body);
        tasks.forEach((task) => {
            if (task.completed) {
                const id = task.id;
                num[id]++;
            }
        });
        for (const id in num)
            console.log(`User ${id}: ${num[id]}`);
    }
});