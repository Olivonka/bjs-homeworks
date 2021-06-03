"use strict"
function getSolutions( a,b,c ) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return { D: d, roots: [] };
    }
    else if (d == 0) {
        let x1 = (-b) / (2 * a);
        return {D: d, roots: [x1]}
    } 
    else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return { D: d, roots: [ x1, x2 ] };
    }
}
function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b ,c);
    console.log(`Вычисляем корни квадратного уравения  ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминаната: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4 , 2);
showSolutionsMessage(1, 2 , 3);
// 2 stage

function getAverageScore(data) {
    if (!data) return 0;
    const newData = {...data}
    let sumMarks = 0;
    let countMarks = 0;
    for (let key in newData) {
        newData[key] = getAverageMark(newData[key]);
        sumMarks += newData[key];
        countMarks++;
    }
    sumMarks = sumMarks / countMarks;
    if (countMarks == 0) sumMarks = 0;
    newData.average = sumMarks;
    return newData;
}
function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = marks.reduce((a, b) => (a + b), 0);
    return sum / marks.length;
}
//stage 3
let data = {
	aaa: 0,
	bbb: 1 };

function getPersonData(secretData) {
	return {
		firstName: getDecodedValue(secretData.aaa), 
		lastName: getDecodedValue(secretData.bbb)
	};
};

function getDecodedValue(secret) {
	if (secret === 0) {
		return 'Родриго';
	} else if (secret === 1) {
		return 'Эмильо';
	};
};

console.log(getPersonData(data));

