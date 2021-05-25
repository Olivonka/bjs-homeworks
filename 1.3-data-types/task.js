"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    let dateRem = date - new Date(); 

    
    if (dateRem < 0 || typeof date != "object") return "Параметр \"Срок ипотеки\" содержит неправильное значение " + date.toLocaleString();
    else if (amount <= 0 || typeof amount != "number") return "Параметр \"Общая стоимость\" содержит неправильное значение " + amount;
    else if (percent <= 0 || typeof percent != "number") return "Параметр \"Процентная ставка\" содержит неправильное значение " + percent;
    else if (contribution < 0 || typeof contribution != "number") return "Параметр \"Первоначальный взнос\" содержит неправильное значение " + contribution;
    else if (contribution >= amount) return 0;

    let creditBody = amount - contribution;

    let creditMonth = Math.floor(dateRem / 60000 / 1440 / 30);
    let persentPerMonth = percent / 100 / 12;
    let monthlyPayment = creditBody * (persentPerMonth + (persentPerMonth / (Math.pow((1 + persentPerMonth), creditMonth) - 1)));
    let totalPaymant = Math.round((monthlyPayment * creditMonth) * 100) / 100;
    return totalPaymant;
}


function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting = '';

    if (!name) {
        name = 'Аноним';
    }

    greeting = `Привет, мир! Меня зовут ${name}.`

    console.log(greeting);
    return greeting;
    // return greeting;
}