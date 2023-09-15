#!/usr/bin/node
const request = require('request');

const url = process.sys.argv[2];
const completeTasks = {};

request(url, { json: true }, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }
    const tasks = JSON.parse(body);
    tasks.forEach((task) => {
        if (task.completed) {
            const userId = task.userId;
            completeTasks[userId] = (completeTasks[userId] || 0) + 1;
        }
    });
    for (const userId in completeTasks) {
        console.log(completeTasks);
    }
});