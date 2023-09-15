#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
    if (error) {
        console.log(error);
        return;
    }
    const todos = JSON.parse(body);
    const tasks = todos.filter((todo) => todo.completed);
    const completeTasks = {};
    tasks.forEach((task) => {
        const userId = task.userId;
        if (completeTasks[userId]) {
            completeTasks[userId]++;
        } else {
            completeTasks[userId] = 1;
        }
    });
    console.log(completeTasks);
});