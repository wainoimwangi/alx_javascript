#!/usr/bin/node

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    let students = [];

    for (let i = 1; i <= numberOfStudents; i++) {
        students.push(studentSeat(i));
    }
    return students;
    
    let classRoom = createClassRoom(10);

    for (let i = 1; i <= classRoom.length; i++) {
        console.log(classRoom);
    }
}