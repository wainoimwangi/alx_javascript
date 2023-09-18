#!/usr/bin/node

function studentHogwarts(privateScore, name) {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = function (points) {
        return privateScore += points;
    };

    const setName = function (newName) {
        name = newName;
    };

    const rewardStudent = function () {
        changeScoreBy(1);
    };

    const penalizeStudent = function () {
        changeScoreBy(-1);
    };

    const getScore = function () {
        return `${name}: ${privateScore}`;
    };

    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore,
    };
};

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());