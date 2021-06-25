class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}

//Задача 2

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let key of this.books) {
            if (key[type] === value) {
                return key;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        const bookByName = this.findBookBy('name', bookName);
        if (bookByName !== null) {
            this.books.splice(this.books.indexOf(bookByName), 1);
            return bookByName;
        }
        return null;
    }
}

//Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade > 0 && grade < 6) {
            if (this.subjects[subject]) {
                this.subjects[subject].push(grade);
            } else {
                this.subjects[subject] = [];
                this.subjects[subject].push(grade);
            }
            return this.subjects[subject].length; 
        } else {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5 \n ${this.subjects[subject] ? this.subjects[subject].length : 0}`;
        }
    }
    getAverageBySubject(subject) {
        let average = 0;
        if (this.subjects[subject]) {
            for (let i of this.subjects[subject]) {
                average += i;
            }
            return average / this.subjects[subject].length;
        } else {
            return average;
        }
    }
    getTotalAverage() {
        let totalAverage = 0;
        if (Object.keys(this.subjects).length === 0) {
            return totalAverage;
        }
        for (let subject in this.subjects) {
            totalAverage += this.getAverageBySubject(subject);
        }
        return totalAverage / Object.keys(this.subjects).length;
    }
} 