#!/usr/bin/node
// Write a function that executes x times a function.

exports.times = function (x, thefunction) {
    for (let i = 0; i < x; i++) {
        return thefunction();
    }
};