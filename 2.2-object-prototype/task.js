"use strict"
String.prototype.isPalindrome = function isPalindrome () {
    let str = this.toLowerCase();
    let string1 = str.split(" ").join("");
    let string2 = string1.split("").reverse().join("");
    return string1 === string2;
}

function getAverageMark(marks) {
    let numberRatings = marks.length;
    let average = 0;

    if (numberRatings == 0) {
        return 0;
    }

    for (let i = 0; i < marks.length; i++) {
        average += marks[i];
    }

    average /= marks.length;
    let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = (new Date).getTime();
    let date = Date.parse(birthday);
    let diff = Math.round((now - date)/ (1000*3600*24));
    let year = (30.4375)*12;
    let age = Math.floor(diff/year);
    if (age>=18) {
        return true;
    }
}